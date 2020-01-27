import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {UsersComponent} from "./users.component";
import {UserDetailsComponent} from "./user-details/user-details.component";
import {UserResolverService} from "./services/user-resolver.service";

const usersRoutes: Routes = [
    {path: '', component: UsersComponent}
  ];
@NgModule({
  imports: [RouterModule.forChild(usersRoutes)],
  exports: [RouterModule]
})

export class UsersRoutingModule {

}
