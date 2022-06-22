import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {


  baseUrl = "https://localhost:7152/api/users/";

  getUserInfoByid(id:number){
    return this.http.get<User>(this.baseUrl+id);
  }
  updateUser(user:User,id:number){
    return this.http.put<User>(this.baseUrl+id,user);

  }

  constructor(public http : HttpClient) { }
}
