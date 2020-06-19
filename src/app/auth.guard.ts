import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { ApiserviceService } from './apiservice.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _apiService: ApiserviceService, 
              private _router: Router) { }
              
  canActivate(): boolean {
    if(this._apiService.loggedIn()) {
      return true;
    } else {
      this._router.navigate(['/signinscreen']);
      return false;
    }
  }
}
