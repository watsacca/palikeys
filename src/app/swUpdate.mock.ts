import {Observable, Subject} from 'rxjs';
import {UpdateAvailableEvent} from '@angular/service-worker';

export class SwUpdateMock {
  public available: Observable<UpdateAvailableEvent> = new Subject();
}
