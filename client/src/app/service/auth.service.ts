import {Injectable} from "@angular/core";
import {User} from "../interfaces/interfaces";
import {Observable, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string = '';



  constructor(
    private http: HttpClient
  ) {
  }
  login(user: User): Observable<{ access: string, refresh: string }>{
    return this.http.post<{access: string, refresh: string}>('/api/token/', user)
      .pipe(
        tap(
          ({access, refresh})=>{
            localStorage.setItem('auth-token', access);
            this.setToken(access)
          }
        )
      )
  }

  setToken(token: string){
    this.token = token;
  }

  getToken(): string{
    return this.token
  }

  isAuthenticated(): boolean{
    return !!this.token
  }

  logout(){
    this.setToken('');
    localStorage.clear();
  }

  registration(){

  }
}
