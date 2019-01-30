import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DronemonLoginPage } from './dronemon-login';

import { LoginLayout1Module } from '../../components/login/layout-1/login-layout-1.module';

@NgModule({
  declarations: [
    DronemonLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(DronemonLoginPage),
    LoginLayout1Module
  ],
})
export class DronemonLoginPageModule {}
