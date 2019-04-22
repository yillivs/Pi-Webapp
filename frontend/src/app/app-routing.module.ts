import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from './core/services/auth-guard/auth-guard.service';

import { LoginComponent } from './pages/login/login.component';
import { DetailComponent } from './pages/detail/detail.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
 {path: '', component: HomeComponent},
 {path: 'home', component: HomeComponent},
 {path: 'login', component: LoginComponent},
 {path: 'register', component: RegisterComponent},
 {path: 'detail', component: DetailComponent, canActivate:[AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
