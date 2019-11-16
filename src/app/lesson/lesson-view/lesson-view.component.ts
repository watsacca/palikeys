import {Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild} from '@angular/core';
import {LessonService} from '../lesson.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Score} from '../../score/_models/scroe.model';
import {KeyboardMapping, KeyboardMappingService} from '../keyboard-mapping.service';
import {VelthuisService} from '../velthuis.service';

@Component({
  selector: 'app-lesson-view',
  templateUrl: './lesson-view.component.html',
  styleUrls: ['./lesson-view.component.scss']
})
export class LessonViewComponent implements OnInit {

  @Input() score: Score;
  @Output() scoreIncrement = new EventEmitter<number>();

  readonly MAX_LESSON = LessonService.MAX_LESSON;

  lessonNumber = 1;
  lesson = '';
  cursorPos = 0;

  errorMessage = '';
  finishedMessage = '';
  lessonScore = 0;

  velthuis = false;

  keyboardMapping: KeyboardMapping | false = false;
  keyboardMappingOptions: { name: string, value: KeyboardMapping }[] =
    [{name: 'QWERTY -> Pali Ṃeāt', value: 'qwertyToPaliMeat'},
      {name: 'QWERTZ -> Pali Ṃeāt', value: 'qwertzToPaliMeat'},
      {name: 'QWERTY -> QWPR', value: 'qwertyToQwpr'},
      {name: 'QWERTZ -> QWPR', value: 'qwertzToQwpr'},
    ];


  @ViewChild('textArea', {static: true}) private textarea: ElementRef<HTMLTextAreaElement>;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private lessonService: LessonService,
              private velthuisService: VelthuisService,
              private keyboardMappingService: KeyboardMappingService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.finishedMessage = '';
        this.errorMessage = '';
        this.lessonScore = 0;
        this.cursorPos = 0;
        this.lessonNumber = parseInt(params['lessonNumber'], 10);
        this.velthuis = this.activatedRoute.snapshot.queryParams['velthuis'] === 'true';
        this.updateLesson();
      }
    );
    this.activatedRoute.url.subscribe(() => this.reset(this.textarea.nativeElement));
  }

  @HostListener('window:keypress', ['$event'])
  onKey(event: { key: string }) {
    const textArea = this.textarea.nativeElement;
    let key = event.key;

    // FIXME: we need the focus to select text. Find a way to keep the selection without focus instead of graping it
    if (this.lessonService.keepFocus) {
      textArea.focus();
    } else {
      return true;
    }

    // ignore windows \r ...
    if (key === '\r') {
      return;
    } else if (key.toLowerCase() === 'enter') {
      key = '\n';
    }

    if (this.keyboardMapping && (this.keyboardMapping as any) !== 'false') {
      key = this.keyboardMappingService.translate(key, this.keyboardMapping);
    }

    if (this.finishedMessage) {
      // TODO: do something here to communicate that the lesson is finished (shake animation for the textArea?)
    } else if (this.matchesLessonWithSpace(key, this.cursorPos)) {
      this.cursorPos++;
      this.correctKey(textArea, key);
    } else if (this.matchesLesson(key, this.cursorPos)) {
      this.correctKey(textArea, key);
    } else {
      this.resetAndDisplayError(textArea);
    }

    if (!this.finishedMessage && this.cursorPos >= this.lesson.length) {
      this.lessonScore += 100 * this.lessonNumber;
      this.finishedMessage = `Lesson completed! High score +${this.lessonScore} 🙌 `;
      this.scoreIncrement.emit(this.lessonScore);
      this.lessonScore = 0;
    }

    // prevent space bar from scrolling the page
    return false;
  }

  onVelthuisChanged() {
    this.updateLesson();
    return this.router.navigate(['lesson', this.lessonNumber], {queryParams: {velthuis: this.velthuis}, queryParamsHandling: 'merge'});
  }

  makeLessonLink(offset = 0) {
    return `/lesson/${this.lessonNumber + offset}`;
  }

  // if the user does not press the space / return button, that's fine
  private matchesLessonWithSpace(key: string, cursorPos: number) {
    return (this.matchesLesson(' ', cursorPos) ||
      this.matchesLesson('\n', cursorPos)) &&
      this.matchesLesson(key, cursorPos + 1);
  }

  private matchesLesson(key: string, cursorPos: number) {
    return this.lesson.charAt(cursorPos) === key;
  }

  // we are strict about making errors -> restart
  private resetAndDisplayError(textArea: HTMLTextAreaElement) {
    this.errorMessage = 'You missed a character, please start over!';
    this.lessonScore = this.lessonScore > 20 ? this.lessonScore - 20 : 0;
    if (this.lessonScore > 0) {
      this.scoreIncrement.emit(this.lessonScore);
      this.errorMessage += ` High score +${this.lessonScore} `;
    }
    this.reset(textArea);
  }

  private reset(textArea: HTMLTextAreaElement) {
    textArea.setSelectionRange(0, 0);
    this.cursorPos = 0;
    this.lessonScore = 0;
  }

  private correctKey(textArea: HTMLTextAreaElement, key: string) {
    textArea.setSelectionRange(0, ++this.cursorPos);
    this.errorMessage = '';
    if (key !== ' ' && key !== '\n') {
      this.lessonScore++;
    }
  }

  private updateLesson() {
    if (this.lessonNumber) {
      this.reset(this.textarea.nativeElement);
      if (this.velthuis) {
        this.lesson = this.velthuisService.substitute(this.lessonService.make(this.lessonNumber));
      } else {
        this.lesson = this.lessonService.make(this.lessonNumber);
      }
    }
  }

}
