import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface GlobalConfig{
  alert: {[key : number] : number},
  logInterval: number,
  wifi: {[key : number]: String} 
}

@Injectable()
export class GlobalConfigService {
  constructor( 
    alert: {[key : number] : number},
    logInterval: number,
    wifi: {[key : number]: String}
  ){}

  private request(method: 'post'|'get', type: 'detail'): Observable<any> {
    let base;

    if (method === 'post') {
      base = this.http.post(`/api/${type}`, );
    } else {
      base = this.http.get(`/api/${type}`, { headers: { Authorization: `Bearer ${this.getToken()}` }});
    }
  }
}
