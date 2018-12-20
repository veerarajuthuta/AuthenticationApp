import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Services} from "../../providers/Services";
import {Helper} from "../../providers/helper";

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  loginData: any;
usersResponse: any;
userResponseList: any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public helper: Helper,
              public serviceCall: Services) {
  }

  ionViewWillEnter() {
   this.getAllUsers();
  }

  getAllUsers() {
    this.helper.showLoader();
    this.serviceCall.doGetLogin().then((result) => {
      this.usersResponse = result;
      this.userResponseList = this.usersResponse.results;
      console.log('length...'+this.userResponseList.length)
    }, (error) => {
      console.log('error ...' + JSON.stringify(error))
    })
  }

}
