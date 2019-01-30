import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings'
import { IService } from './IService';

@Injectable()
export class DronemonService implements IService {

    constructor(public af: AngularFireDatabase) { }

    public getId = (): string => 'dronemon';

    public getTitle = (): string => 'Dronemon';

    getAllThemes = (): Array<any> => {
        return [
            { "title": "Basic", "theme": "layout1" },
            { "title": "News", "theme": "layout2" },
            { "title": "With Text Header", "theme": "layout3" }
        ];
    };
    // HOME PAGE INFO
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

    getDataForTheme = (menuItem: any): any => {
        return this[
            'getDataFor' +
            menuItem.theme.charAt(0).toUpperCase() +
            menuItem.theme.slice(1)
        ]();
    };

    getEventsForTheme = (menuItem: any): any => {
        var that = this;
        return {
            'onItemClick': function (item: any) {
                //that.toastCtrl.presentToast(item.title);
            },
            'onItemClickDronemon': function (item: any) {
                //that.toastCtrl.presentToast(item.button.text);
            },
        };
    };

    getShowItemId = (item: any): string => {
        return this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
    };

    prepareParams = (item: any) => {
        let result = {
            title: item.title,
            data: [],
            events: this.getEventsForTheme(item)
        };
        result[this.getShowItemId(item)] = true;
        return result;
    };

    load(item: any): Observable<any> {
        var that = this;
        that.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('actionSheet/' + item.theme)
                    .valueChanges()
                    .subscribe(snapshot => {
                        that.loadingService.hide();
                        observer.next(snapshot);
                        observer.complete();
                    }, err => {
                        that.loadingService.hide();
                        observer.complete();
                    });
            });
        } else {
            return new Observable(observer => {
                that.loadingService.hide();
                observer.next(this.getDataForTheme(item));
                observer.complete();
            });
        }
    };
}
