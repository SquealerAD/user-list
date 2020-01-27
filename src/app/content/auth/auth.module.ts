import {NgModule} from "@angular/core";
import {Routes} from "@angular/router";
import {CommonModule} from "@angular/common";
import {AuthComponent} from "./auth.component";
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {AuthRoutingModule} from "./auth-routing.module";
import {NgZorroAntdModule} from "ng-zorro-antd";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    NgZorroAntdModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    AuthRoutingModule
  ],
  exports: [

  ]
})
export class AuthModule {
  constructor(){}
}
