import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AboutUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-about-us',
  templateUrl: 'about-us.html',
})
export class AboutUsPage {

  ImageArray:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ImageArray = [
      {"Image":"assets/imgs/slide0.jpg"},
      {"Image":"assets/imgs/slide1.jpg"},
      {"Image":"assets/imgs/slide2.jpg"},
      {"Image":"assets/imgs/slide3.jpg"},
      {"Image":"assets/imgs/slide4.jpg"}

    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutUsPage');
  }
  public buttonClicked: boolean = false;
  public button1Clicked: boolean = false;
  public visible:boolean = false;
  public visible1:boolean = false;
  onButtonClick() {
  
    this.buttonClicked = !this.buttonClicked;
    this.visible =!this.visible;
    
  }
  onButton1Click(){
    this.button1Clicked = !this.button1Clicked;
    this.visible1 =!this.visible1;
  }

  showcontent(){
    this.onButtonClick();
  }
  showcontent1(){
    this.onButton1Click();
  }
}
