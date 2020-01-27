import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CopyComponent} from './copy.component';
import {CopyRoutingModule} from './copy-routing.module';



@NgModule({
  declarations: [
    CopyComponent
  ],
  imports: [
    CommonModule,
    CopyRoutingModule
  ],
  exports: []
})
export class CopyModule { }
