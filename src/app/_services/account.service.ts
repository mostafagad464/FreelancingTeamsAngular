import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account } from '../_models/account';
import { UserAccount } from '../_models/user-account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl = "https://localhost:7152/api/Accounts/";
  querystring = ";"

  constructor(public http: HttpClient) { }

  getAccount(id: Number) {
    return this.http.get<Account>(this.baseUrl + id);
  }

  getAccounts(){
    return this.http.get<Account[]>(this.baseUrl);
  }

  getUserName(fName: string, lName: string) {
    this.querystring = "First_Name=" + fName + "&Last_Name=" + lName;
    return this.http.get<any>(this.baseUrl + "UserName?" + this.querystring);
  }

  addAccount(account: Account) {
    return this.http.post<Account>(this.baseUrl, account);
  }

  EditAccount(account: Account) {
    return this.http.put<Account>(this.baseUrl, account);
  }

  
}
