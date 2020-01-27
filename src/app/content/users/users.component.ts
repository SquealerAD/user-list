import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {HttpService} from '../../services/http.service';
import {User} from './users-list/user/user.model';
import {DataStorageService} from '../../services/data-storage.service';
import {defaultUser} from '../../shared/exports';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UsersComponent implements OnInit, OnDestroy {

  constructor(private httpService: HttpService,
              private dataStorageService: DataStorageService) { }
  public userList: Array<User>;
  private selectedUser: User = defaultUser;
  private dsSubscription: Subscription;

  ngOnInit() {
    this.httpService.getUsersByPageNum(1, 12);
    this.dsSubscription = this.dataStorageService.getUsers$()
      .subscribe((usersList) => {
        this.userList = usersList;
      });
  }

  onUserSelected(user) {
    this.selectedUser = user;
    this.dataStorageService.setSelectedUser(user);
  }

  ngOnDestroy(): void {
    if (!!this.dsSubscription) {
      this.dsSubscription.unsubscribe();
    }
  }

}
