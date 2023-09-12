import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {tap} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class CrmServiceService {

  private token: string = '';
  headers = new HttpHeaders({

  'Access-Control-Allow-Origin': '*',
  // 'Access-Control-Allow-Methods': 'GET, OPTIONS',
  //   'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
  // 'Access-Control-Allow-Headers': 'x-requested-with, Content-Type, origin, authorization, accept, x-access-token',
  // 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkzODYxMDU3LCJpYXQiOjE2OTM4NjA3NTcsImp0aSI6IjNmOWE1YTk2ZTQ1ZDQwNWZiODc0MDY1YzYyYmU4NzViIiwidXNlcl9pZCI6MX0.-yLreoJKAkubxssDlrYMvt3kab9bxpWyihFv1p6D21c'
  });

  constructor(
    private http: HttpClient,
  ) {
  }

  list() {
    return this.http.get('/api/list/', {headers:this.headers});
  }

  upload(formData: any) {
    return this.http.post('/api/list/', formData, {headers:this.headers})
  }

  log(formData: any){
    return this.http.post<{token: string}>('/api/token/', formData, {headers:this.headers})
      .pipe(
        tap(
          ({token})=>{
            localStorage.setItem('auth-token', token);
            this.setToken(token)
          }
        )
      )
  }

  setToken(token: string){
    this.token = token;
  }

  getToken(){
    return this.token
  }

  isAuthenticated(){
    return !!this.token
  }

  logout(){
    this.setToken('');
    localStorage.clear();
  }
}
