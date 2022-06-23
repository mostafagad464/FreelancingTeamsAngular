import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseurl = "https://localhost:7152/api/Login/";

  constructor(public http: HttpClient) { }

  login(u:string, p:string)
  {
    let usr = {
      username: u,
      password: p
    }
    return this.http.post<any>(this.baseurl, usr);
  }
  
}
