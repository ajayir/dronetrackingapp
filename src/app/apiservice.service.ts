import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { States } from './states';
import { Drone } from './drone';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http: HttpClient) {}

  getData (url){
    return this.http.get(url);
  }

  registerDrone(url, drone: Drone) {
    return this.http.post<any>(url, drone);
  }
}
