import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MIssuePage } from './m-issue';

@NgModule({
  declarations: [
    MIssuePage,
  ],
  imports: [
    IonicPageModule.forChild(MIssuePage),
  ],
})
export class MIssuePageModule {}
