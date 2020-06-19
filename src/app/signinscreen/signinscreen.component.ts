import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Observable, from, of } from 'rxjs';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Login } from '../models/login';
import { User } from '../models/user';
import { Globalappconstants } from '../globalappconstants';


@Component({
  selector: 'app-signinscreen',
  templateUrl: './signinscreen.component.html',
  styleUrls: ['./signinscreen.component.scss']
})
export class SigninscreenComponent implements OnInit {
 
  public isResetPassword = false;
  public loginModel = new Login(null, null);
  public resetPasswordModel = new User(null, null, null, null);
  public isSecretKeyFound = true;

  constructor(
    private apiService: ApiserviceService, 
    private router: Router, 
    private appComponent: AppComponent) 
    { }

  ngOnInit(): void {
    var me = this,
        isLoggedIn = me.apiService.loggedIn() ?  true : false;
    me.router.navigate([isLoggedIn ? '/home' : '/']) 
  }

  onSubmit() {
    var me = this,
        url = Globalappconstants.API_ENDPOINT + 'login'; 
    
    me.apiService.signUserIn(url, me.loginModel)
      .subscribe(
        data => {
          if (data) {
            console.log(data);
            document.cookie = "token=" + data.token + "; expires=" + new Date(2020, 6, 15).toUTCString();
            me.appComponent.isSignedIn = me.apiService.loggedIn();
            me.router.navigate(['/home']);
          }
        }
      );
  }

  onResetPassword() {
    console.log("here");
    var me = this,
        url = Globalappconstants.API_ENDPOINT + 'resetpassword';
    console.log(this.resetPasswordModel);
    me.apiService.resetPassword(url, me.resetPasswordModel)
      .subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }
}
