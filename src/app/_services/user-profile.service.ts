import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../_models/user';
import { Account } from '../_models/Account';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {


  baseUrl = "https://localhost:7152/api/users/";
  baseUrl2 = "https://localhost:7152/api/Accounts/";

  getUserInfoByid(id:number){
    return this.http.get<User>(this.baseUrl+id);
  }
  updateUser(user:User,id:number){
    return this.http.put<User>(this.baseUrl+id,user);

  }
  getAccountInfoByid(id:number){
    return this.http.get<Account>(this.baseUrl2+id);
  }
  updateAccount(accountInfo:Account){
    return this.http.put<Account>(this.baseUrl2,accountInfo);
  }

  constructor(public http : HttpClient) { }
}
