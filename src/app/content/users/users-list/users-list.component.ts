import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "./user/user.model";
import {defaultUser} from "../../../shared/exports";
import {PaginationService} from "./pagination/services/pagination.service";


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor(private paginationService: PaginationService) { }

  @Input('userList') usersList: Array<User>;
  @Output('userSelected') userSelected: EventEmitter<User> = new EventEmitter<User>();
  public selectedUserId: number = -1;
  public currentPage: number = 1;
  public addUserOpen: boolean = false;

  ngOnInit() {
    this.paginationService.getCurrentPage()
      .subscribe((currentPage) => {
          this.currentPage = currentPage;
      });
  }

  onUserSelect(user: User) {
    this.selectedUserId = this.selectedUserId === user.id ? -1 : user.id;
    this.userSelected.emit(this.selectedUserId >= 0 ? this.usersList.find(u => u.id === user.id) : defaultUser);
  }

  trackBy(index,elem){
    return elem.id;
  }

  onAddUserClick(){
      this.addUserOpen = !this.addUserOpen;
  }

  userAdded(){
    this.onAddUserClick();
  }

}
