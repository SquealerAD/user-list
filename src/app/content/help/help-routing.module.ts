import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HelpComponent} from './help.component';


const helpRoutes: Routes = [
    {path: '', component: HelpComponent}
  ];
@NgModule({
  imports: [RouterModule.forChild(helpRoutes)],
  exports: [RouterModule]
})
export class HelpRoutingModule {

}
