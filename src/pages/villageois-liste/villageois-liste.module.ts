import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VillageoisListePage } from './villageois-liste';

@NgModule({
  declarations: [
    VillageoisListePage,
  ],
  imports: [
    IonicPageModule.forChild(VillageoisListePage),
  ],
})
export class VillageoisListePageModule {}
