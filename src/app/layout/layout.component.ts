import {Component, ElementRef, OnInit, Renderer2, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  public sidebarStatus: boolean = false;

  constructor() {}

  ngOnInit() {

  }

  onSidebarToggle() {
    this.sidebarStatus = !this.sidebarStatus;
  }
}
