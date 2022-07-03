import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseurl = "https://localhost:7152/api/Users/";
  querystring =";"

  constructor(public http: HttpClient) { }

  // getAllUsers() {
  //   return this.http.get<any>(this.baseurl);
  // }
  
  // getUser(id: Number) {
  //   return this.http.get<any>(this.baseurl + id);
  // }

  addUser(user: User) {
    return this.http.post(this.baseurl, user);
  }

  // EditUser(st: any) {
  //   return this.http.put(this.baseurl, st);
  // }

  // DeleteUser(id: Number) {
  //   return this.http.delete(this.baseurl);
  // }
}
