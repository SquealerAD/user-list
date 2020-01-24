import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule } from "ng-zorro-antd";
import { HttpClientModule } from "@angular/common/http";
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { SidebarMenuComponent } from './layout/sidebar/sidebar-menu/sidebar-menu.component';
import { SidebarUserInfoComponent } from './layout/sidebar/sidebar-user-info/sidebar-user-info.component';
import { HeaderComponent } from './layout/header/header.component';
import { UsersListComponent } from './content/users-list/users-list.component';
import { UserDetailsComponent } from './content/user-details/user-details.component';
import { UserComponent } from './content/users-list/user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SidebarMenuComponent,
    SidebarUserInfoComponent,
    HeaderComponent,
    UsersListComponent,
    UserDetailsComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
