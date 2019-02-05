import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MissionsService {
  constructor(private client: HttpClient) {}

  getData = (): any => {
    return [{
      title: 'Test Flight',
      icon: 'jet',
      status: 'inFlight'
    },
    {
      title: 'Test Flight w/Battery Failure',
      icon: 'battery-dead',
      status: 'inRepair'
    }];
  }

  load(): Observable<any> {
    return new Observable(observer => {
        observer.next(this.getData());
        observer.complete();
    });
  }

  executeStatus(item: any): Observable<boolean> {
    return new Observable(observer => {
      observer.next(this.executeMission(item));
      observer.complete();
    });
  }

  executeMission(item: any): boolean {
    return true;
  }
}
