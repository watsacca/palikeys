import {Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild} from '@angular/core';
import {LessonService} from '../lesson.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Score} from '../../score/_models/scroe.model';
import {VelthuisService} from '../velthuis.service';
import {DiffResults} from 'ngx-text-diff/lib/ngx-text-diff.model';

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
      }
    );
    this.activatedRoute.url.subscribe(() => this.reset());
  }

  onStartClicked() {
    this.state = State.TYPING;
    this.focus();
    // FIXME: need to wait for text area to be visble to focus it...
    setTimeout(() => this.focus(), 100);
  }

  onDoneClicked() {
    this.lessonTyped = this.lessonTyped.replace('\r', '');
    this.state = State.SHOW_SCORE;
  }

  onRestartClicked() {
    this.reset();
  }

  // enter key -> start lesson
  @HostListener('window:keypress', ['$event'])
  onEnterKeyPress($event: any) {
    if ($event.key !== 'enter' && $event.key === '\n') {
      return false;
    } else if (this.isShowLesson()) {
      this.onStartClicked();
      return false;
    } else if (this.isShowScore()) {
      this.onRestartClicked();
      return false;
    }
    return true;
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

  onScoreDiff(diff: DiffResults) {
    this.lessonScore += (this.makeLessonText().split('\n').length - diff.diffsCount) * 100;
    if (diff.diffsCount === 0) {
      this.finishedMessage = `Lesson completed with no errors! High score +${this.lessonScore} 🙌 `;
      this.scoreIncrement.emit(this.lessonScore);
    } else if (diff.diffsCount === 1) {
      this.finishedMessage = `Lesson completed with errors in only one line. You are getting there! High score +${this.lessonScore} 🙌`;
      this.scoreIncrement.emit(this.lessonScore);
    } else if (this.lessonScore > 0) {
      this.errorMessage = `Lesson completed with errors in ${diff.diffsCount} lines. Please try again. High score +${this.lessonScore} 🙌`;
      this.scoreIncrement.emit(this.lessonScore);
    } else {
      this.errorMessage = 'Too many errors! Please try again.';
    }
    this.lessonScore = 0;
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
