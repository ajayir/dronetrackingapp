import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'dronetrackingapp';
  public isDroneRegistered = false;
  public isSignedIn = false;
}
