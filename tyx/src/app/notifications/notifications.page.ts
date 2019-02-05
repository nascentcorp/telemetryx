import { Component, Input, ViewChild, OnChanges } from '@angular/core';
import { NotificationsService } from './notifications-service';
import { Observable } from 'rxjs';
// import { IonicPage, Content } from '@ionic/angular';

@Component({
  selector: 'app-notifications',
  templateUrl: 'notifications.page.html',
  styleUrls: ['notifications.page.scss'],
  providers: [NotificationsService]
})
export class NotificationsPage {
  data: any;
  events: any;
  animateItems: Observable<Array<any>>;

  constructor(private service: NotificationsService) {
    this.animateItems = this.service.load();
    // Todo: Init Event handlers
  }

  onEvent(event: string, item: any, e: any) {
    if (e) {
      e.stopPropagation();
    }
    if (this.events[event]) {
      this.events[event](item);
    }
  }
}

