import {Injectable} from "@angular/core";
import {Loading, LoadingController, ToastController} from "ionic-angular";
@Injectable()
export class Helper {
  loading: Loading;
  public loadingOnce: any;

  constructor(public loadingCtrl: LoadingController,
              public toastCtrl: ToastController) {

  }

  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    this.loading.present();
  }

  loaderDismiss() {
    this.loading.dismiss();
  }

  presentToast(tstmessage) {
    let toast = this.toastCtrl.create({
      message: tstmessage,
      duration: 3000
    });
    toast.present();
  }


}
