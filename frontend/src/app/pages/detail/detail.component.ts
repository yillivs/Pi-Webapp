import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../core/services/authentication/authentication.service'
import { GlobalConfig } from '../../core/services/global-config/global-config.service';
import { config } from 'rxjs';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit  {
  alert: number[];
  logInterval: number;
  wifi: number[];
  config : GlobalConfig;
  titles: string[];
  
  
  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
      this.auth.detail().subscribe(data => {
      this.alert = this.setAlertArray(data);
      this.titles = ["General","Threshold","Send Interval"];
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
}