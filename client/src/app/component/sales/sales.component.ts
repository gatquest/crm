import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";
import {ApiService} from "../../service/api.service";


@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit{

  public orders: [] = [];
  displayedColumns: string[] = ['id', 'created', 'brand', 'image'];
  constructor(
    private auth: AuthService,
    private router: Router,
    private api: ApiService) {
  }

  ngOnInit(){
    this.loadSales();
  }

  loadSales(){
    this.api.getList().subscribe((data:any)=>{
      if(data){
        this.orders = data
      }
    })
  }

}
