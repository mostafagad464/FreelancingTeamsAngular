import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account } from '../_models/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseurl = "https://localhost:7152/api/Accounts/";
  querystring =";"

  constructor(public http: HttpClient) { }

  // getAllAccounts() {
  //   return this.http.get<any>(this.baseurl);
  // }
  
  getAccount(id: Number) {
    return this.http.get<Account>(this.baseurl + id);
  }

  getAccounts(){
    return this.http.get<Account[]>(this.baseurl);
  }

  getUserName(fName: string, lName: string){
    this.querystring = "First_Name="+fName+"&Last_Name="+lName;
    return this.http.get<any>(this.baseurl+"UserName?"+this.querystring);
  }

  addAccount(account: Account) {
    return this.http.post<Account>(this.baseurl, account);
  }

  EditAccount(account: Account) {
    return this.http.put<Account>(this.baseurl, account);
  }

  // DeleteAccount(id: Number) {
  //   return this.http.delete(this.baseurl);
  // }





}
