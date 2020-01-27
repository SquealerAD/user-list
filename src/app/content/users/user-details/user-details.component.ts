import {Component, Input, OnInit} from '@angular/core';
import {User} from '../users-list/user/user.model';
import {defaultUser} from '../../../shared/exports';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor() { }

  @Input() selectedUser: User = defaultUser;

  ngOnInit() {

  }

}
