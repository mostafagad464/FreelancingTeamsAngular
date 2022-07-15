import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseurl = "https://localhost:7152/api/Users/";
  imageurl = "https://localhost:7152/api/Image/";
  querystring = ";"

  constructor(public http: HttpClient) { }

  // getAllUsers() {
  //   return this.http.get<any>(this.baseurl);
  // }
  GetUserToGetTeams(id: Number) {
    return this.http.get<any>(this.baseurl + id);
  }

  getUser(id: Number) {
    return this.http.get<User>(this.baseurl + id);
  }

  addUser(user: User) {
    return this.http.post<User>(this.baseurl, user);
  }

  addImage(UserId: number, img: FormData) {
    return this.http.post<any>(this.imageurl + UserId, img);
  }

  EditUser(user: User) {
    return this.http.put<User>(this.baseurl, user);
  }

  // DeleteUser(id: Number) {
  //   return this.http.delete(this.baseurl);
  // }

  getAllFreelancers() {
    return this.http.get<User[]>(this.baseurl + "Freelancers");
  }

}
