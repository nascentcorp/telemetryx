import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { IService } from '../../services/IService';
import { DronemonPage } from '../dronemon';
import { DronemonService } from '../../services/dronemon-service';

@IonicPage()
@Component({
  selector: 'page-dronemon-login',
  templateUrl: 'dronemon-login.html',
  providers: [DronemonService]
})
export class DronemonLoginPage {

  page: any;
  service: IService;
  params: any = {};

  constructor(public navCtrl: NavController, navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.page = navParams.get('page');
    this.service = navParams.get('service');
    if (this.service) {
      this.params = this.service.prepareParams(this.page, navCtrl);
      this.params.data = this.service.load(this.page);
    } else {
      navCtrl.setRoot("DronemonPage");
    }		
  }

  onLoggedIn(token:string) {
    if(token) {

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
