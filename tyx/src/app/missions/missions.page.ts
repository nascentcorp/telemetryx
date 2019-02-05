import { Component, Input, ViewChild, OnChanges } from '@angular/core';
import { MissionsService } from './missions-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-missions',
  templateUrl: 'missions.page.html',
  styleUrls: ['missions.page.scss'],
  providers: [MissionsService]
})

export class MissionsPage {
  data: any;
  events: any;
  animateItems: Observable<Array<any>>;

  constructor(private service: MissionsService) {
    this.animateItems = this.service.load();
  }

  onExecute(event: string, item: any, e: any) {
    if (e) {
      e.stopPropagation();
    }

    item.executeStatus = this.service.executeStatus(item);
  }
}

