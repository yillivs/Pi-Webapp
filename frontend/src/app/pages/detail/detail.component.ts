import { Component, OnInit } from '@angular/core';
import { AuthenticationService, GlobalConfig } from '../../core/services/authentication/authentication.service'

import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit  {

  config: GlobalConfig;
  
  constructor(private auth: AuthenticationService, private router: Router) { }

  ngOnInit() {
      this.auth.detail().subscribe(data => {
        this.config = data;
    }, (err) => {
      console.error(err);
    });
  }

  trackByIndex(index: any, obj: any): any {
    if(obj)return null
    return index;
  }

  trackAlert(index, obj) {
    return obj ? obj.id : undefined;

}

  updateJSON(config: GlobalConfig){
      this.auth.updateDetail(this.config).subscribe(()=> {
        this.router.navigateByUrl('/home');
      }, (err)=> {
        console.error(err);
      })
  }
}