import {Injectable} from '@angular/core';
import {chantingTexts} from './chantingTexts';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  // TODO: calc this value
  static readonly MAX_LESSON = chantingTexts.length;

  make(lessonNumber: number) {
    return chantingTexts[lessonNumber - 1];
  }

  calcWordsPerMinute(timeStampStart: number, lesson: string, cursorPos: number): number {
    return Math.round(lesson.trim().slice(0, cursorPos).split(/\s/).length / ((Date.now() - timeStampStart) / 60000));
  }

}
