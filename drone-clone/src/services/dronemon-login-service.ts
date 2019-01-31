import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings'

@Injectable()
export class DronemonLoginService {

    constructor(public af: AngularFireDatabase) { }

    getData = () => {
      return {
        "login" : {
            "username"        : "Enter your username",
            "password"        : "Enter your password",
            "labelUsername"   : "USERNAME",
            "labelPassword"   : "PASSWORD",
            "forgotPassword"  : "Forgot password?",
            "facebookLogin"   : "Login with",
            "login"           : "Login",
            "title"           : "Login to your account",
            "errorUser"       : "Field can't be empty",
            "errorPassword"   : "Field can't be empty"
        },
        "register": {
            "title"               : "Register",
            "username"            : "Enter your username",
            "city"                : "Your home town",
            "country"             : "Where are you from?",
            "password"            : "Enter your password",
            "email"               : "Your e-mail address",
            "register"            : "register",
            "lableUsername"       : "USERNAME",
            "lablePassword"       : "PASSWORD",
            "lableEmail"          : "E-MAIL",
            "lableCountry"        : "COUNTRY",
            "lableCity"           : "CITY",
            "errorUser"           : "Field can't be empty",
            "errorPassword"       : "Field can't be empty",
            "errorEmail"          : "Invalid email address",
            "errorCountry"        : "Field can't be empty",
            "errorCity"           : "Field can't be empty"
        }
      };
    };

    getEvents = (): any => {
        var that = this
          return {
              onLogin: function(params):string {
                console.log(params);
                return 'foobar';
              },
              onForgot: function() {
                //that.toastCtrl.presentToast('onForgot');
              },
              onRegister: function(params) {
                //that.toastCtrl.presentToast('onRegister');
              },
              onSkip: function(params) {
                //that.toastCtrl.presentToast('onSkip');
              },
              onFacebook: function(params) {
                //that.toastCtrl.presentToast('onFacebook');
              },
              onTwitter: function(params) {
                //that.toastCtrl.presentToast('onTwitter');
              },
              onGoogle: function(params) {
                //that.toastCtrl.presentToast('onGoogle');
              },
              onPinterest: function(params) {
                //that.toastCtrl.presentToast('onPinterest');
              },
          };
      };

    load(): Observable<any> {
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('login')
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
