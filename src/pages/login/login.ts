import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {LogInModel} from "../../modal/LogInModel";
import {Services} from "../../providers/Services";
import 'rxjs/add/operator/map';
import {Helper} from "../../providers/helper";
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  logInForm: FormGroup;
  logInModel: any;
  loginResponse: any;
  loginResults: any;
  getUsersResponse: any;
  validationMessages = {
    'userName': [
      {type: 'required', message: 'Username is required'},
    ],
    'password': [
      {type: 'required', message: 'Password is required'}
    ]
  };

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public formBuilder: FormBuilder,
              public helper: Helper,
              public serviceCall: Services) {
    this.logInModel = new LogInModel('', '');
    this.logInForm = this.formBuilder.group({
      userName: new FormControl(['', Validators.required]),
      password: new FormControl(['', Validators.required]),
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  logIn(){
    this.helper.showLoader();
    this.serviceCall.doGetUsers().then((result)=>{
      this.getUsersResponse = result;
      for(var i = 0;i< this.getUsersResponse.length;i++){
        if(this.getUsersResponse[i].username === this.logInModel.userName){
          this.helper.presentToast("Login success");
          this.navCtrl.push('ProfilePage')
          break;
        }else{
         // this.helper.presentToast("Login Fail");
        }
      }
      console.log('all users resp...'+JSON.stringify(this.getUsersResponse))
    },(error)=>{

    })
  }

}
