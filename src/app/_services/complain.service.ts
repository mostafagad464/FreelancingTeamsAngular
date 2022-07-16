import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Complain } from '../_models/complain';

@Injectable({
  providedIn: 'root'
})
export class ComplainService {

  baseUrl='https://localhost:7152/api/Complains/'

  constructor(public http:HttpClient) { }

  getComplains(){
    return this.http.get<Complain[]>(this.baseUrl);
  }

  getComplain(id:number){
    return this.http.get<Complain>(this.baseUrl+id);
  }
}
