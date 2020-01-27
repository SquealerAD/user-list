import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {User} from "../users-list/user/user.model";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {DataStorageService} from "../../../services/data-storage.service";

@Injectable()
export class UserResolverService implements Resolve<User>{

  constructor(private dataStorageService: DataStorageService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> | Promise<User> | User {
    return this.dataStorageService.getUsers().find((user) => {
      return user.id === this.dataStorageService.getSelectedUserId();
    });
  }
}
