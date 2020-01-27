import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AuthComponent implements OnInit, OnDestroy {

  constructor(private router: Router) { }
  public authRoute: string = 'login';
  private routerSubscription: Subscription;

  ngOnInit() {
    this.router.navigate(['login']);

    this.routerSubscription = this.router.events.subscribe((ev) => {
        if (ev instanceof NavigationEnd) {
          this.authRoute = ev.url.slice(1);
        }
    });
  }

  ngOnDestroy(): void {
    if (!!this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

}
