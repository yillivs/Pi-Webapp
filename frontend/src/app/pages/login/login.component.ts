import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../../core/services/authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    credentials: TokenPayload = {
    email: '',
    password: ''
  };

  constructor(private auth: AuthenticationService, private router: Router) {}

  login() {
    this.auth.login(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/detail');
    }, (err) => {
      console.error(err);
    });
  } 

}
