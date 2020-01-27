import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../content/users/users-list/user/user.model';
import {defaultUser} from '../shared/exports';

@Injectable()
export class DataStorageService {
  constructor() {}
  private users$: BehaviorSubject<Array<User>> = new BehaviorSubject<Array<User>>([]);
  private selectedUserId$: BehaviorSubject<number> = new BehaviorSubject<number>(-1);
  private selectedUser$: BehaviorSubject<User> = new BehaviorSubject<User>(defaultUser);

  getSelectedUserId(): number {
    return this.selectedUserId$.getValue();
  }

  setSelectedUserId(id: number): void {
    this.selectedUserId$.next(id);
  }

  getUsers(): Array<User> {
    return this.users$.getValue();
  }

  getUsers$(): Observable<Array<User>> {
    return this.users$.asObservable();
  }

  setUsers(usersList: Array<User>): void {
    this.users$.next(usersList);
  }

  addUser(user: User): void {
    const users = [...this.getUsers().slice(), user];
    this.users$.next(users);
  }

  setSelectedUser(user: User) {
    this.selectedUser$.next(user);
    this.selectedUserId$.next(user.id);
  }
}
