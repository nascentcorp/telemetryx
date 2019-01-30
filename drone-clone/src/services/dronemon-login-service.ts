import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings'

@Injectable()
export class DronemonLoginService {

    constructor(public af: AngularFireDatabase) { }

    getData = () => {
      return {
        "toolbarTitle": "Telemetryx Dronemon",
        "title": "Dronemon",
        "subtitle": "by Telemetryx",
        "subtitle2": "for PBExpo",
        "link":"https://nascentcorp.io",
        "description": "It all starts here",
        "background": "assets/images/background/42.jpg"
      };
    };

    load(): Observable<any> {
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('home')
                    .valueChanges()
                    .subscribe(snapshot => {
                        observer.next(snapshot);
                        observer.complete();
                    }, err => {
                        observer.error([]);
                        observer.complete();
                    });
            });
        } else {
            return new Observable(observer => {
                observer.next(this.getData());
                observer.complete();
            });
        }
    }
}
