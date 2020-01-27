import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {CommonModule} from '@angular/common';
import {SidebarMenuComponent} from './sidebar/sidebar-menu/sidebar-menu.component';
import {SidebarUserInfoComponent} from './sidebar/sidebar-user-info/sidebar-user-info.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {LayoutComponent} from './layout.component';
import {LayoutRoutingModule} from './layout-routing.module';


@NgModule({
  declarations: [
    SidebarComponent,
    SidebarMenuComponent,
    SidebarUserInfoComponent,
    HeaderComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NgZorroAntdModule
  ],
  exports: [

  ]
})

export class LayoutModule {

}
