import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  username:string;
  password:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController,public http:Http) {
  }
  goCheck(){
    var username=this.username;
    var password=this.password;
    var pu=this.navCtrl;
    var al=this.alertCtrl;
      this.http.get( 'http://datainfo.duapp.com/shopdata/userinfo.php').subscribe( 
        data=>{
            pu.push(HomePage,{name:'首页'});
          },
          err=>{
            let alert=al.create({
              title: '请求失败',
              subTitle: '请求错误，请重试!',
              buttons: ['OK']
            });
            alert.present();
    }
  );
  }
  ionViewDidLoad() {
    
  }

}
