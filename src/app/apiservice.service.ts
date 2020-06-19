import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { States } from './states';
import { Drone } from './models/drone';
import { User } from './models/user';
import { Login } from './models/login';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(
    private http: HttpClient,
    private _router: Router) { }

  getData (url){
    return this.http.get(url);
  }

  // Registration
  registerUser (url, user: User) {
    return this.http.post<any>(url, user);
  }

  registerDrone(url, drone: Drone) {
    return this.http.post<any>(url, drone);
  }

  // Sign In
  signUserIn(url, login: Login) {
    return this.http.post<any>(url, login);
  }

  // Sign Out
  signUserOut() {
    var me = this,
        oldDate = new Date(new Date().setDate(0));
    document.cookie = "token=; expires=" + oldDate + "; path=/;";
    me._router.navigate(['/signinscreen']);
  }

  /** 
   * Reset Password: Resuse Login model since 
   * it's the same fields required 
   * */
  resetPassword(url, resetPasswordModel: User) {
    return this.http.post<any>(url, resetPasswordModel);
  }

  loggedIn() {
    return !!document.cookie;
  }

  getToken() {
    return this.getCookie('token');
  }

  getCookie(key) {
    var re = new RegExp(key + "=([^;]+)");
    var value = re.exec(document.cookie);
    return (value != null) ? unescape(value[1]) : null;
  }

  getRegisteredDrones(url) {
    return this.http.get<any>(url);
  }
}
