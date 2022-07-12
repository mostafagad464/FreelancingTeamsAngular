import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../_models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  baseUrl='https://localhost:7152/api/Clients';


  constructor(public http:HttpClient) { }

  getClients(){
    return this.http.get<Client[]>(this.baseUrl);
  }
}
