import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class FreelancerService {

  baseUrl='https://localhost:7152/api/Users/Freelancers'


  constructor(public http:HttpClient) { }

  getFreelancers(){
    return this.http.get<User[]>(this.baseUrl);
  }
}
