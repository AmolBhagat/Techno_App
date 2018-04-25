import { Component } from '@angular/core';
import { NavController,LoadingController,ActionSheetController,NavParams} from 'ionic-angular';
//import {DataProvider} from '../../providers/data/data';
//import { ApiService } from '../../app/service/apiservice';

//import { SocialSharing } from '@ionic-native/social-sharing/';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public AllCourses: any = [];
  ImageArray:any=[];

  constructor(public navCtrl: NavController,
    public loadinController:LoadingController,
    public actionSheetController:ActionSheetController,
    public navParams: NavParams
  ) {
    this.ImageArray = [
      {"Image":"assets/imgs/home/slide0.png"},
      {"Image":"assets/imgs/home/slide1.jpg"},
      {"Image":"assets/imgs/home/slide2.jpg"}
    ]
     // this.getData();
  }

  public sections: any = {
    first: 'first',
    second: 'second',
    third: 'third',
    selectedSection: 'first'
  };

  gotoSecond() {
    this.sections.selectedSection = this.sections.second;
  }

  gotoThird() {
    this.sections.selectedSection = this.sections.third;
  }
  

  // getData() {
  //   this.AllCourses=[];

  //   this.apiService.getData().subscribe(res => {

  //     console.log('apiresult ', res.json())
  //     this.AllCourses=res.json();
  //   })
  // }

ionViewDidLoad(){
  console.log('ionViewDidLoad LoginPage');
  }

}
