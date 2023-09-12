import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";
import {ApiService} from "../../service/api.service";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit{


  orders: [] = [];
  constructor(
    private auth: AuthService,
    private router: Router,
    private api: ApiService) {
  }

  ngOnInit(){

  }

  logout(){
    this.auth.logout();
    this.router.navigateByUrl('/')
  }



}
