import {Component, Input, OnInit} from '@angular/core';
import {User} from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  @Input() user: User;
  @Input() selectedUserId: number = -1;

  ngOnInit() {

  }

}
