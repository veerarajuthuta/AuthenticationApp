import {Injectable} from "@angular/core";
import {Helper} from "./helper";
import {Http, Headers} from "@angular/http";
import {GETALLUSERS, PROFILEURL} from "./Constant";
import 'rxjs/add/operator/map';

@Injectable()
export class Services {
  constructor(public http: Http,
              public helper: Helper) {
  }

  doGetUsers(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return new Promise((resolve, reject) => {
      this.http.get(GETALLUSERS, {headers: headers}).map(res => res.json()).subscribe(res => {
        resolve(res);
        this.helper.loaderDismiss();
      }, error => {
        reject(error.json());
        this.helper.loaderDismiss();
      });
    });

  }

  doGetLogin() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return new Promise((resolve, reject) => {
      this.http.get(PROFILEURL, {headers: headers}).map(res => res.json()).subscribe(res => {
        resolve(res);
        this.helper.loaderDismiss();
      }, error => {
        reject(error.json());
        this.helper.loaderDismiss();
      });
    });

  }
}
