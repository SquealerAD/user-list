import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './content/auth/services/auth.service';
import { en_US, NzI18nService } from 'ng-zorro-antd/i18n';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'users-list';
  constructor(private authService: AuthService,
              private router: Router,
              private i18n: NzI18nService ) {}
  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.authService.setAuthStatus(true);
      this.router.navigate(['/system/users']);
    }
    this.i18n.setLocale(en_US);
  }
}
