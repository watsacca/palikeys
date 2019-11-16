import {TestBed} from '@angular/core/testing';

import {LessonService} from './lesson.service';

describe('LessonService', () => {
  const lesson = 'word '.repeat(100);

  beforeEach(() => TestBed.configureTestingModule({}));

  it('should make lesson 1', () => {
    const service: LessonService = TestBed.get(LessonService);
    expect(service.make(1)).toBeDefined();
  });
});
