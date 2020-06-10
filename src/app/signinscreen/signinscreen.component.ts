import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Observable, from, of } from 'rxjs';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-signinscreen',
  templateUrl: './signinscreen.component.html',
  styleUrls: ['./signinscreen.component.scss']
})
export class SigninscreenComponent implements OnInit {

  constructor(
    private apiService: ApiserviceService, 
    private router: Router, 
    private appComponent: AppComponent) 
    { 
      var me = this; 
      me.signIntoApp();
    }

  ngOnInit(): void {
    var me = this;
  }

  signIntoApp() {
    var me = this,
      login = me.apiService.signUserIn().login; 

      if (login) {
        me.appComponent.isSignedIn = true;
        me.router.navigate(['/home']);
      }
  }
}
