import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { IService } from '../../services/IService';
import { DronemonPage } from '../dronemon/dronemon';
import { DronemonLoginService } from '../../services/dronemon-login-service';

@IonicPage()
@Component({
  selector: 'page-dronemon-login',
  templateUrl: 'dronemon-login.html',
  providers: [DronemonLoginService]
})
export class DronemonLoginPage {

  data:any = {};

  constructor(public navCtrl: NavController, navParams: NavParams, service: DronemonLoginService) {
    let that = this;
    service.load().subscribe(snapshot => {
      that.data = snapshot;
    });
  }

  onLoggedIn(token:string) {
    if(token) {
      let params = this.service.prepareParams(this.page, this.navCtrl);
      this.params.data = this.service.load(this.page);

      this.navCtrl.push('DronemonPage', {
        service: this.service,
        page: 'DronemonPage'
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DronemonLoginPage');
  }

}
