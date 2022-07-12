import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = "https://localhost:7152/api/Users/";

  constructor(public http: HttpClient) { }

  getAllFreelancers() {
    return this.http.get<User[]>(this.baseUrl + "Freelancers");
  }

}
