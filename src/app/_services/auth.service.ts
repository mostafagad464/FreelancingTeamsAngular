import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseurl = "https://localhost:7152/api/Login/";
  isAuthenticated$ = new BehaviorSubject<boolean>(false);

  constructor(public http: HttpClient) {
    const authenticated = !!sessionStorage.getItem('access_token'); 
    this.isAuthenticated$.next(authenticated);
   }

  login(u: string, p: string) {
    let usr = {
      username: u,
      password: p
    }
    return this.http.post<any>(this.baseurl, usr);
  }

  logIn() {
    this.isAuthenticated$.next(true);
  }

  logout() {
    this.isAuthenticated$.next(false);
  }

  getCurrentUser() {
    let usr = null;
    if (sessionStorage.getItem("access_token")) {
      usr = {
        "id": helper.decodeToken(sessionStorage.getItem("access_token")?.toString()).Id,
        "role": helper.decodeToken(sessionStorage.getItem("access_token")?.toString()).Role
      }
    }
    return usr;
  }
  DeleteToken(){
    sessionStorage.removeItem("access_token");
    this.isAuthenticated$.next(false);
  }


}
