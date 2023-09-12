import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginPageComponent} from "./component/login-page/login-page.component";
import {AuthLayoutComponent} from "./component/auth-layout/auth-layout.component";
import {SiteLayoutComponent} from "./component/site-layout/site-layout.component";
import {RegisterPageComponent} from "./component/register-page/register-page.component";
import {AuthGuard} from "./classes/auth.guard";
import {MainpageComponent} from "./mainpage/mainpage.component";
import {OverviewComponent} from "./component/overview/overview.component";
import {NewSaleComponent} from "./component/new-sale/new-sale.component";
import {SalesComponent} from "./component/sales/sales.component";

const routes: Routes = [
  {
    path: '', component: SiteLayoutComponent, canActivate: [AuthGuard], children:[
      {path: '', redirectTo: 'overview', pathMatch: 'full'},
      {path: 'overview', component: OverviewComponent, children: [
          {path: '', component: SalesComponent},
          {path: 'new', component: NewSaleComponent,},
          {path: 'fabric', component: OverviewComponent,},
          {path: 'receiption', component: OverviewComponent,},
          {path: 'delivery', component: OverviewComponent,},
        ]},
    ]
  },
  {
    path: '', component: AuthLayoutComponent, children:[
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginPageComponent},
      {path: 'registration', component: RegisterPageComponent}
    ]
  },

]
@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule{

}
