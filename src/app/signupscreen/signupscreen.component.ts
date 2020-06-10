import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-signupscreen',
  templateUrl: './signupscreen.component.html',
  styleUrls: ['./signupscreen.component.scss']
})
export class SignupscreenComponent implements OnInit {
  public userModel = new User(null, null);

  constructor(private apiService: ApiserviceService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    var me = this;
    me.apiService.registerUser('http://localhost:3000/register', me.userModel)
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
