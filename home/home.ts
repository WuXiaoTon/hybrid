import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HelloPage } from '../hello/hello';
import { ViewChild } from '@angular/core';
import { MenuController } from 'ionic-angular';
//import {Navbar} from 'mint-ui';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
  
})
export class HomePage {
 // @ViewChild(Navbar)navbar:Navbar;
  constructor(public navCtrl: NavController,public menuCtrl:MenuController) {
    
  }
  friendship:string="msg";
  openMenu(){
    this.menuCtrl.open();
  }
  goSub(){
    this.navCtrl.push(HelloPage,{name:'liu'});
  }
  doInfinite(){
    console.log("上拉刷新");
  }

  /*ionViewLoad(){
    this.navbar.backButtonClick=()=>{
      this.navCtrl.pop();
    }
    this.bk.setBackButtonText('首页');
  }*/
}
