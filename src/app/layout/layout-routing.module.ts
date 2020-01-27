import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './layout.component';

const LayoutRoutes: Routes = [
  {path: '', component: LayoutComponent, children: [
      {path: 'users', loadChildren: () => import('../content/users/users.module').then(m => m.UsersModule)},
      {path: 'dashboard', loadChildren: () => import('../content/dashboard/dashboard.module').then(m => m.DashboardModule)},
      {path: 'faq', loadChildren: () => import('../content/faq/faq.module').then(m => m.FaqModule)},
      {path: 'copy', loadChildren: () => import('../content/copy/copy.module').then(m => m.CopyModule)},
      {path: 'help', loadChildren: () => import('../content/help/help.module').then(m => m.HelpModule)},
      {path: 'news', loadChildren: () => import('../content/news/news.module').then(m => m.NewsModule)},
      {path: 'settings', loadChildren: () => import('../content/settings/settings.module').then(m => m.SettingsModule)}
    ]}
];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(LayoutRoutes)]
})
export class LayoutRoutingModule {

}
