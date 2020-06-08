import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Observable, from, of } from 'rxjs';


@Component({
  selector: 'app-signinscreen',
  templateUrl: './signinscreen.component.html',
  styleUrls: ['./signinscreen.component.scss']
})
export class SigninscreenComponent implements OnInit {

  constructor(private apiService: ApiserviceService) { }

  ngOnInit(): void {

  }

  signIntoApp() {
    var me = this;
    me.apiService.getData('');
  }

}
