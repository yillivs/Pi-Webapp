import { Injectable } from '@angular/core';

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
}
