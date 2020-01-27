import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../users-list/user/user.model";
import {data, defaultUser} from "../../../shared/exports";
import {fromEvent, Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor() { }

  @Input('selectedUser') selectedUser: User = defaultUser;

  ngOnInit() {

  }

}
