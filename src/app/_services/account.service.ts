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

  getAllAccounts() {
    return this.http.get<any>(this.baseurl);
  }
  getAccount(id: Number) {
    return this.http.get<any>(this.baseurl + id);
  }

  getUserName(fName: string, lName: string){
    this.querystring = "First_Name="+fName+"&Last_Name="+lName
    return this.http.get<string>(this.baseurl+"UserName?"+this.querystring)
  }

  addAccount(st: Account) {
    return this.http.post(this.baseurl, st);
  }

  EditAccount(st: any) {
    return this.http.put(this.baseurl, st);
  }

  DeleteAccount(id: Number) {
    return this.http.delete(this.baseurl);
  }
}
