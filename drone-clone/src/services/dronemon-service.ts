import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings'
import { IService } from './IService';
import { LoadingService } from './loading-service';

@Injectable()
export class DronemonService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService:LoadingService) { }

    public getId = (): string => 'dronemon';

    public getTitle = (): string => 'Dronemon';

    getAllThemes = (): Array<any> => {
        return [
            { "title": "Basic", "theme": "layout1" },
            { "title": "News", "theme": "layout2" },
            { "title": "With Text Header", "theme": "layout3" }
        ];
    };
    // PAGE INFO
    getData = () => {
        return {
            "toolbarTitle": "Telemetryx Dronemon",
            "title": "Dronemon",
            "subtitle": "by Telemetryx",
            "subtitle2": "for PBExpo",
            "link":"https://nascentcorp.io",
            "description": "It all starts here",
            "background": "assets/images/background/42.jpg",
            "tabs": {
                "data": this.getTabConfig(),
                "events": this.getTabEvents()
            }
        };
    };

    getTabConfig = (): any => {
        return [
            // {
            //     "icon": "home",
            //     "page": "DronemonPage"
            // },
            {
                "icon": "alert",
                "page": "AlertsPage"
            },
            {
                "icon": "settings",
                "page": "SettingsPage"
            },
        ]; 
    }

    getTabEvents = (): any => {
        let that = this;
        return {
            'onTabClick': function (item: any) {
                that.navigate(item);
            }
        };
    }

    navigate = (item: any): void => {
        console.log(item);
    }

    getDataForTheme = (menuItem: any): any => {
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

    getEventsForTheme = (menuItem: any): any => {
        var that = this;
        return {
            //this is not needed. @@@@TODO refactor away from IService. Too bound to dynamic use case.
        };
    };

    getEvents = (menuItem: any): any => {
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
            data: this.getData(),
            events: this.getEvents(item)
        };
        //result[this.getShowItemId(item)] = true;
        return result;
    };

    load(item: any): Observable<any> {
        var that = this;
        //that.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('actionSheet/' + item.theme)
                    .valueChanges()
                    .subscribe(snapshot => {
                        //that.loadingService.hide();
                        observer.next(snapshot);
                        observer.complete();
                    }, err => {
                        //that.loadingService.hide();
                        observer.complete();
                    });
            });
        } else {
            return new Observable(observer => {
                //that.loadingService.hide();
                observer.next(that.getData());
                observer.complete();
            });
        }
    };
}
