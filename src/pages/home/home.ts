import { Component } from '@angular/core';
import { NavController,LoadingController,ActionSheetController } from 'ionic-angular';

//import { SocialSharing } from '@ionic-native/social-sharing/';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public allMusic:any=[];
  constructor(public navCtrl: NavController,
    public loadinController:LoadingController,public actionSheetController:ActionSheetController) {
  }
ionViewDidLoad(){
  console.log('ionViewDidLoad LoginPage');
  }
}
