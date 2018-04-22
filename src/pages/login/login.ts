import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import{HomePage} from '../home/home';
import{ SignupPage } from '../signup/signup';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  login(){
    this.navCtrl.push(HomePage);
  }
  signUp(){
    this.navCtrl.push(SignupPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
