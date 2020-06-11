import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Observable, from, of } from 'rxjs';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Login } from '../models/login';
import { Globalappconstants } from '../globalappconstants';


@Component({
  selector: 'app-signinscreen',
  templateUrl: './signinscreen.component.html',
  styleUrls: ['./signinscreen.component.scss']
})
export class SigninscreenComponent implements OnInit {
 
  public loginModel = new Login(null, null);

  constructor(
    private apiService: ApiserviceService, 
    private router: Router, 
    private appComponent: AppComponent) 
    { }

  ngOnInit(): void {
  }

  onSubmit() {
    var me = this,
        url = Globalappconstants.API_ENDPOINT + 'login'; 

    me.apiService.signUserIn(url, this.loginModel)
      .subscribe(
        data => {
          if (data.data) {
            me.appComponent.isSignedIn = true;
            me.router.navigate(['/home']);
          }
        }
      );
  }
}
