import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { App } from 'ionic-angular';
import { MIssuePage } from '../m-issue/m-issue';
import { MCoopreationPage } from '../m-coopreation/m-coopreation';
import { SettingPage } from '../setting/setting';


@IonicPage()
@Component({
  selector: 'page-person',
  templateUrl: 'person.html',
})
export class PersonPage {
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private app:App
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }
  button1_3=[
    {src:'assets/imgs/per (1).png',name:'芽币'},
    {fun:'mypub()',src:'assets/imgs/per (2).png',name:'我发布的'},
    {src:'assets/imgs/per (3).png',name:'我合作的'}
  ]
  button4_9=[
    {src:'assets/imgs/per (4).png',name:'我的收藏'},
    {src:'assets/imgs/per (5).png',name:'我的草稿箱'},
    {src:'assets/imgs/per (6).png',name:'视频发布'},
    {src:'assets/imgs/per (7).png',name:'完善信息'},
    {src:'assets/imgs/per (8).png',name:'VIP等级'},
    {src:'assets/imgs/per (9).png',name:'账户安全'},
    {src:'assets/imgs/per (10).png',name:'帮助与反馈'},
    {src:'assets/imgs/per (11).png',name:'设置'}
  ]
  mybtn1(i){
    if(i==1){
      this.app.getRootNav().push(MIssuePage);
    }else if(i==2){
      this.app.getRootNav().push(MCoopreationPage);
    }
  }
  mybtn2(i){
    if(i==7){
      this.app.getRootNav().push(SettingPage);
    }
}
}
