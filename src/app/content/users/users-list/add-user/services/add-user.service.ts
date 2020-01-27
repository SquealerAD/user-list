import {User} from "../../user/user.model";
import {DataStorageService} from "../../../../../services/data-storage.service";
import {Injectable} from "@angular/core";

@Injectable()
export class AddUserService {

  constructor(private dataStorageService: DataStorageService){}

  generateUniqueId(){
    const users: Array<User> = this.dataStorageService.getUsers();
    let id = users.length + 1;
    let ids = users.map((user) => {
      return user.id;
    });
    ids = ids.sort((a,b) => {
      return a > b ? 1 : a < b ? -1 : 0;
    });
    for(let index = 0; index < ids.length;index++){
      if(ids[index] > index + 1){
        id = index + 1;
        break;
      }
    }
    return id;
  }

  addUser(user){
    this.dataStorageService.addUser(user);
  }
}
