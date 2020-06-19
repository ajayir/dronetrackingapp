import { Component } from '@angular/core';
import { Globalappconstants } from './globalappconstants';
import { ApiserviceService } from './apiservice.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public me = this;
  public title = 'dronetrackingapp';
  public isDroneRegistered = false;
  public isSignedIn = false;
  public apiService;

  constructor(private _apiService: ApiserviceService) {
    this.apiService = _apiService;
  }

}
