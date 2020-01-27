import {Component, Input, OnInit} from '@angular/core';
import {User} from "./user.model";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  @Input('user') user: User;
  @Input('selectedUserId') selectedUserId: number = -1;

  ngOnInit() {

  }

}
