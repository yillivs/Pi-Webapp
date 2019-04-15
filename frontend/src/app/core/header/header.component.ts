import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../services/authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: 
  [AuthenticationService]
})
export class HeaderComponent implements OnInit {

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
  }

}
