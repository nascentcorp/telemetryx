import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DronemonLoginPage } from '../dronemon-login/dronemon-login';
import { IService } from '../../services/IService';
import { LoadingService } from '../../services/loading-service';
import { DronemonMissionService } from '../../services/dronemon-mission-service';
@IonicPage()
@Component({
  selector: 'page-dronemon',
  templateUrl: 'dronemon.html',
  providers: [LoadingService, DronemonMissionService]
})
export class DronemonPage {

  page: any;
  service: IService;
  params: any = {};

  constructor(public navCtrl: NavController, navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.page = navParams.get('page');
    this.service = navParams.get('service');

    if (this.service) {
      this.params = this.service.prepareParams(this.page, navCtrl);
    } else {
      navCtrl.push(DronemonLoginPage);
    }		
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DronemonPage');
  }
}
