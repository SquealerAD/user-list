import { Component, OnInit } from '@angular/core';
import { sideMenuItems, ISideMenuItem } from  '../../../shared/exports';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css']
})
export class SidebarMenuComponent implements OnInit {

  constructor() { }
  public sideMenuItems: Array<ISideMenuItem> = sideMenuItems;

  ngOnInit() {
  }

}
