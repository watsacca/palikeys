import {Injectable} from '@angular/core';
import {chantingTexts} from './chantingTexts';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  // TODO: find a better way to deal with this
  keepFocus = true;

  static readonly MAX_LESSON = chantingTexts.length;

  make(lessonNumber: number) {
    return chantingTexts[lessonNumber - 1];
  }

}
