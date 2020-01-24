import { Component, OnInit } from '@angular/core';
import { IUser, data } from '../../layout/exports';

const defaultUser: IUser = {id: -1, last_name: '', first_name: '', avatar: '', email: ''};

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor() { }

  public usersList: Array<IUser> = data;
  public selectedUser: IUser = defaultUser;
  ngOnInit() {
  }

  onUserSelect(index: number) {
    if(this.selectedUser.id === this.usersList[index].id) {
      this.selectedUser = defaultUser;
    } else {
      this.selectedUser = this.usersList[index];
    }
  }

  trackBy(index,elem){
    return elem.id;
  }
}
