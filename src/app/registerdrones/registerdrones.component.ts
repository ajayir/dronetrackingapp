import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Drone } from '../drone';
import { Observable, from, of } from 'rxjs';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-registerdrones',
  templateUrl: './registerdrones.component.html',
  styleUrls: ['./registerdrones.component.scss']
})
export class RegisterdronesComponent implements OnInit {

  public licenseStates: any;
  public droneModel = new Drone('', '', '', null, '', '');
  public stateSelectHasError = true;
  public formIsSubmitted = false;

  constructor(private apiService: ApiserviceService, private appComp: AppComponent) { }

  ngOnInit(): void {
    var me = this;
    me.apiService.getData('../assets/mockdata/states.json')
      .subscribe(
        data => {
          this.licenseStates = data;
        }
      );
  }

  validateStateSelection(value) {
    if (value == "default") {
      this.stateSelectHasError = true;
    } else {
      this.stateSelectHasError = false;
    }
  }

  onSubmit() {
    var me = this;
    me.apiService.registerDrone('http://localhost:3000/registerDrone', this.droneModel).
      subscribe(
        data => {
          console.log('Success!', data);
          me.formIsSubmitted = true;
          me.appComp.isDroneRegistered = me.formIsSubmitted;
        },
        error => console.log('Error!', error)
      );
  }
}
