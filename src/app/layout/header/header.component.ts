import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthService} from '../../content/auth/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router) { }

  @Output() sidebarOpened: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() sidebarStatus: boolean = false;

  ngOnInit() {
  }

  onExit() {
    this.authService.setAuthStatus(false);
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }

  onSideBarToggle() {
    this.sidebarOpened.emit();
  }

}
