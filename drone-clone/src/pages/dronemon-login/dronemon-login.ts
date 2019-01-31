import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DronemonService } from '../../services/dronemon-service';
import { DronemonLoginService } from '../../services/dronemon-login-service';

@IonicPage()
@Component({
  selector: 'page-dronemon-login',
  templateUrl: 'dronemon-login.html',
  providers: [DronemonLoginService, DronemonService]
})
export class DronemonLoginPage {

  params: any = {};

  constructor(public navCtrl: NavController, private loginService: DronemonLoginService,
    private dronemonService: DronemonService) {
    this.params.data = this.loginService.load();
    this.params.events = this.loginService.getEvents();
  }

  onLogin(token:string) {
    if(token) {
      this.navCtrl.push('DronemonPage', {
        token: token,
        page: { title: "Telemetryx Dronemon", component: "DronemonPage" },
        service: this.dronemonService
      });
    }
    else {
      this.params.errorMessage = 'Invalid login';
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DronemonLoginPage');
  }
}
