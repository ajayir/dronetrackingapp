import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { States } from './states';
import { Drone } from './models/drone';
import { User } from './models/user';
import { Login } from './models/login';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http: HttpClient) {}

  getData (url){
    return this.http.get(url);
  }

  // Registration
  registerUser (url, user: User) {
    return this.http.post<any>(url, user);
  }

  registerDrone(url, drone: Drone) {
    return this.http.post<any>(url, drone);
  }

  // Login
  signUserIn(url, login: Login) {
    return this.http.post<any>(url, login);
  }
}
