import {Component, Input, OnInit, Renderer2, ViewEncapsulation} from '@angular/core';
import {IUser} from "../../../layout/exports";

const defaultUser: IUser = {id: -1, last_name: '', first_name: '', avatar: '', email: ''};

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  private _selectedUser: IUser = defaultUser;
  @Input('user') user: IUser;
  @Input('selectedUser') set selectedUser(user: IUser){
    if(!user){return;}
    this._selectedUser = (this._selectedUser.id >= 0 && this._selectedUser.id === user.id) ? defaultUser : user;
    console.log(this._selectedUser);
  }

  get selectedUser(){
    return this._selectedUser;
  }
  ngOnInit() {
  }

}
