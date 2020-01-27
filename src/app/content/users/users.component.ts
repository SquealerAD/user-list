import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {HttpService} from '../../services/http.service';
import {User} from './users-list/user/user.model';
import {ActivatedRoute, Router} from '@angular/router';
import {DataStorageService} from '../../services/data-storage.service';
import {defaultUser} from '../../shared/exports';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UsersComponent implements OnInit {

  constructor(private httpService: HttpService,
              private dataStorageService: DataStorageService) { }
  public userList: Array<User> = [];
  private selectedUser: User = defaultUser;

  ngOnInit() {
    this.httpService.getUsersByPageNum(1, 12);
    this.dataStorageService.getUsers$()
      .subscribe((usersList) => {
        this.userList = usersList;
      });
  }

  onUserSelected(user) {
    this.selectedUser = user;
    this.dataStorageService.setSelectedUser(user);
  }


  // listenToParamsChange(ar: ActivatedRoute){
  //
  //     ar.params.subscribe((params) => {
  //         debugger;
  //         console.log(params);
  //         this.selectedUserId = !!(+params.id) ? +params.id : -1;
  //         this.dataStorageService.setSelectedUserId(this.selectedUserId);
  //     });
  // }

}
