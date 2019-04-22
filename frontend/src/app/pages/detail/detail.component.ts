import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../core/services/authentication/authentication.service'
import { GlobalConfig } from '../../core/services/global-config/global-config.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit  {
  alert: number[];
  alertTitles: string[];
  logInterval: number;
  wifi: number[];
  wifiTitles: string[];
  
  
  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
      this.auth.detail().subscribe(data => {
      this.alert = this.setAlertArray(data);
      this.alertTitles = ["General","Threshold","Send Interval"]
      this.logInterval = data.logInterval;
      this.wifi = this.setWifiArray(data);
      this.wifiTitles = ["Network","Key","Security"];
    }, (err) => {
      console.error(err);
    });
  }
  setAlertArray (obj: GlobalConfig) {
    return Object.keys(obj.alert).map((key) => {return obj.alert[key]});
  }

  setWifiArray(obj: GlobalConfig)  {
    return Object.keys(obj.wifi).map((key) => {return obj.wifi[key]});
  }

  updateJSON(){

  }
}