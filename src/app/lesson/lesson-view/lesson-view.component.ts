import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {LessonService} from '../lesson.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Score} from '../../score/_models/scroe.model';
import {VelthuisService} from '../velthuis.service';

enum State {
  SHOW_LESSON,
  TYPING,
  SHOW_SCORE,
}

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
  lessonTyped = '';

  errorMessage = '';
  finishedMessage = '';
  lessonScore = 0;

  velthuis = false;

  private state: State = State.SHOW_LESSON;

  @ViewChild('textArea', {static: true}) private textarea: ElementRef<HTMLTextAreaElement>;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private lessonService: LessonService,
              private velthuisService: VelthuisService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.lessonNumber = parseInt(params['lessonNumber'], 10);
        this.velthuis = this.activatedRoute.snapshot.queryParams['velthuis'] === 'true';
        this.reset();
        this.textarea.nativeElement.focus();
      }
    );
    this.activatedRoute.url.subscribe(() => this.reset());
    this.textarea.nativeElement.focus();
  }

  onStartClicked() {
    this.state = State.TYPING;
    this.focus();
  }

  onDoneClicked() {
    this.lessonTyped = this.lessonTyped.replace('\r', '');

    // if (this.keyboardMapping && (this.keyboardMapping as any) !== 'false') {
    //   key = this.keyboardMappingService.translate(key, this.keyboardMapping);
    // }

    this.lessonScore += 100 * this.lessonNumber;
    this.finishedMessage = `Lesson completed! High score +${this.lessonScore} 🙌 `;
    this.scoreIncrement.emit(this.lessonScore);
    this.lessonScore = 0;
    this.state = State.SHOW_SCORE;

  }

  onRestartClicked() {
    this.reset();
  }

  makeLessonText() {
    if (this.lessonNumber) {
      if (this.velthuis) {
        return this.velthuisService.substitute(this.lessonService.make(this.lessonNumber));
      } else {
        return this.lessonService.make(this.lessonNumber);
      }
    }
    return '';
  }

  makeLessonScore() {
    return 'TODO';
  }

  onVelthuisChanged() {
    return this.router.navigate(['lesson', this.lessonNumber], {queryParams: {velthuis: this.velthuis}, queryParamsHandling: 'merge'});
  }

  makeLessonLink(offset = 0) {
    return `/lesson/${this.lessonNumber + offset}`;
  }

  isShowLesson() {
    return this.state === State.SHOW_LESSON;
  }

  isTyping() {
    return this.state === State.TYPING;
  }

  isShowScore() {
    return this.state === State.SHOW_SCORE;
  }

  // the user does not need to type the space, return or '-' button
  private matchesLessonWithSpecialKey(key: string, cursorPos: number) {
    return (this.matchesLesson(' ', cursorPos) ||
      this.matchesLesson('\n', cursorPos) ||
      this.matchesLesson('’', cursorPos) ||
      this.matchesLesson('/', cursorPos) ||
      this.matchesLesson('-', cursorPos)) &&
      this.matchesLesson(key, cursorPos + 1);
  }

  private matchesLesson(key: string, cursorPos: number) {
    return this.lessonTyped.charAt(cursorPos) === key;
  }

  private reset() {
    this.lessonTyped = '';
    this.lessonScore = 0;
    this.finishedMessage = '';
    this.errorMessage = '';
    this.state = State.SHOW_LESSON;
  }

  private focus() {
    if (this.textarea && this.textarea.nativeElement) {
      this.textarea.nativeElement.focus();
    }
  }

}
