import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthComponent} from "./content/auth/auth.component";
import {LoginComponent} from "./content/auth/login/login.component";
import {SignupComponent} from "./content/auth/signup/signup.component";
import {AuthGuard} from "./content/auth/services/auth.guard";


const routes: Routes = [
    {path: '', component: AuthComponent, pathMatch: 'full'},
    {path: 'system', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule) ,canActivate: [AuthGuard], canLoad: []},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
