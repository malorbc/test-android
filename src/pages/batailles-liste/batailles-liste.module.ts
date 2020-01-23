import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BataillesListePage } from './batailles-liste';

@NgModule({
  declarations: [
    BataillesListePage,
  ],
  imports: [
    IonicPageModule.forChild(BataillesListePage),
  ],
})
export class BataillesListePageModule {}
