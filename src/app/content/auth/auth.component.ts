import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AuthComponent implements OnInit {

  constructor(private router: Router) { }
  public authRoute: string = 'login';

  ngOnInit() {
    this.router.navigate(['login']);

    this.router.events.subscribe((ev) => {
        if(ev instanceof NavigationEnd){
          this.authRoute = ev.url.slice(1);
        }
    });
  }

}
