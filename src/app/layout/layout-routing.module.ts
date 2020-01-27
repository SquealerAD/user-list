import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LayoutComponent} from "./layout.component";

const LayoutRoutes: Routes = [
  {path: '', component: LayoutComponent,children: [
      {path: 'users', loadChildren: () => import('../content/users/users.module').then(m => m.UsersModule)},
      {path: 'dashboard', loadChildren: () => import('../content/dashboard/dashboard.module').then(m => m.DashboardModule)},
      {path: 'faq', loadChildren: () => import('../content/faq/faq.module').then(m => m.FaqModule)}
    ]}
];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(LayoutRoutes)]
})
export class LayoutRoutingModule {

}
