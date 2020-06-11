import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { ApiserviceService } from '../apiservice.service';
import { Globalappconstants } from '../globalappconstants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signupscreen',
  templateUrl: './signupscreen.component.html',
  styleUrls: ['./signupscreen.component.scss']
})
export class SignupscreenComponent implements OnInit {
  public userModel = new User(null, null);
  public isSignUpSuccesful = false;

  constructor(private apiService: ApiserviceService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    var me = this,
      url = Globalappconstants.API_ENDPOINT + 'register';
    me.apiService.registerUser(url, me.userModel)
      .subscribe(
        data => {
          console.log(data);
          if (data.success) {
            me.isSignUpSuccesful = true;
          }
        },
        error => {
          console.log(error);
        }
      );
  }

  onSignInClick() {
    var me = this;
    me.router.navigate(['/signinscreen']);
  }
}
