import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './classes/token.interceptor';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { AuthLayoutComponent } from './component/auth-layout/auth-layout.component';
import {SiteLayoutComponent} from "./component/site-layout/site-layout.component";
import {RegisterPageComponent} from "./component/register-page/register-page.component";
import {OverviewComponent} from "./component/overview/overview.component";
import {NewSaleComponent} from "./component/new-sale/new-sale.component";
import {SalesComponent} from "./component/sales/sales.component";
import {MatTableModule} from "@angular/material/table";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AuthLayoutComponent,
    SiteLayoutComponent,
    RegisterPageComponent,
    OverviewComponent,
    NewSaleComponent,
    SalesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatFormFieldModule,


  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
