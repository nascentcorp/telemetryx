import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class NotificationsService {
  constructor() { }

  getData = (): any => {
    return [{
      title: 'Flight 783',
      icon: 'cloud-upload',
      status: 'inFlight'
    },
    {
      title: 'Flight 793',
      icon: 'construct',
      status: 'inRepair'
    },
    {
      title: 'Flight 812',
      icon: 'cloud-download',
      status: 'grounded'
    }];
  }

  load(): Observable<any> {
    return new Observable(observer => {
        observer.next(this.getData());
        observer.complete();
    });
  }
}
