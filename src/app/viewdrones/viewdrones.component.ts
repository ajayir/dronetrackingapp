import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Globalappconstants } from '../globalappconstants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewdrones',
  templateUrl: './viewdrones.component.html',
  styleUrls: ['./viewdrones.component.scss']
})
export class ViewdronesComponent implements OnInit {

  public registeredDrones;

  constructor(
    private _apiService: ApiserviceService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    var me = this;
    me.getRegisteredDrones();
  }

  getRegisteredDrones() {
    var me = this,
        url = Globalappconstants.API_ENDPOINT + 'getregistereddrones';

    me._apiService.getRegisteredDrones(url)
      .subscribe(
        data => {
          if (data) {
            me.registeredDrones = data.Drones
          }
        },
        error => {
          
        }
      );
  }
}
