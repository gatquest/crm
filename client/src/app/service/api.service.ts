import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getList(){
    return this.http.get('api/list')
  }

  get(id: string){
  }

  post(data: any){
    return this.http.post('api/list/', data)
  }

  put(data: any){

  }

  delete(id: string){

  }
}
