import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { States } from './states';
import { Drone } from './drone';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http: HttpClient) {}

  getData (url){
    return this.http.get(url);
  }

  registerUser (url, user: User) {
    return this.http.post<any>(url, user);
  }

  registerDrone(url, drone: Drone) {
    return this.http.post<any>(url, drone);
  }

  signUserIn() {
    return <any>{login: true};
  }
}
