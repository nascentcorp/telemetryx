import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppearanceAnimationLayout4Module } from '../../components/list-view/appearance-animation/layout-4/appearance-animation-layout-4.module';
import { IonicPageModule } from 'ionic-angular';
import { DronemonPage } from './dronemon';

@NgModule({
  declarations: [
    DronemonPage,
  ],
  imports: [
    IonicPageModule.forChild(DronemonPage),
    AppearanceAnimationLayout4Module
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DronemonPageModule {}
