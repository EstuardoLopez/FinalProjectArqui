import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NutricionalPage } from './nutricional';

@NgModule({
  declarations: [
    NutricionalPage,
  ],
  imports: [
    IonicPageModule.forChild(NutricionalPage),
  ],
})
export class NutricionalPageModule {}
