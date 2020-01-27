import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BASE_URL, MAX_NUM_OF_PAGE_NUMBERS, NUM_OF_ITEM_PER_PAGE} from './shared/exports';
import {HttpService} from './services/http.service';
import {DataStorageService} from './services/data-storage.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthModule} from './content/auth/auth.module';
import {AuthComponent} from './content/auth/auth.component';
import {MessageService} from './services/message.service';
import {AuthService} from './content/auth/services/auth.service';
import {AuthGuard} from './content/auth/services/auth.guard';
import {SharedModule} from './shared/shared.module';
import {AuthInterceptorService} from "./content/auth/services/auth-interceptor.service";


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    DataStorageService,
    MessageService,
    AuthGuard,
    MessageService,
    HttpService,
    AuthService,
    {provide: BASE_URL, useValue: `https://reqres.in/api/`},
    {provide: NUM_OF_ITEM_PER_PAGE, useValue: 6},
    {provide: MAX_NUM_OF_PAGE_NUMBERS, useValue: 5},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
