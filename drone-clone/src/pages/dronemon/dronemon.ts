import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';

import { DronemonService } from '../../services/dronemon-service';
import { AppSettings } from '../../services/app-settings'

@IonicPage()
@Component({
  selector: 'page-dronemon',
  templateUrl: 'dronemon.html',
  providers: [DronemonService]
})
export class DronemonPage {

  data:any = {};

  constructor(public navCtrl: NavController, public service:DronemonService, public modalCtrl: ModalController) {
    service.load().subscribe(snapshot => {
      this.data = snapshot;
    });

     if (AppSettings.SHOW_START_WIZARD) {
      this.presentProfileModal();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DronemonPage');
  }

  presentProfileModal() {
    const profileModal = this.modalCtrl.create("IntroPage");
    profileModal.present();
  }
}
