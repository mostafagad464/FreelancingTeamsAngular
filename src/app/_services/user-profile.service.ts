import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../_models/user';
import { Account } from '../_models/Account';
import { Portoflio } from '../_models/portoflio';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {


  baseUrl = "https://localhost:7152/api/";
  // baseUrl2 = "https://localhost:7152/api/Accounts/";
  

  getUserInfoByid(id:number){
    return this.http.get<User>(this.baseUrl+"users/"+id);
  }
  updateUser(user:User){
    return this.http.put<User>(this.baseUrl+"users/",user);

  }
  getAccountInfoByid(id:number){
    return this.http.get<Account>(this.baseUrl+"Accounts/"+id);
  }
  updateAccount(accountInfo:Account){
    return this.http.put<Account>(this.baseUrl+"Accounts/",accountInfo);
  }
  getFreelancerPortfolio(id:number)
  {
    return this.http.get<Portoflio[]>(this.baseUrl+"Portoflio/"+id);
  }
  deletePortoflio(id:number)
  {
    return this.http.delete(this.baseUrl+"Portoflio/"+id)
  }

  constructor(public http : HttpClient) { }
}
