import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PublishPage } from '../publish/publish';
import { App } from 'ionic-angular';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController,public navParams: NavParams,private app:App) {

  }
  pub(){
    this.app.getRootNav().push(PublishPage);
}
}
