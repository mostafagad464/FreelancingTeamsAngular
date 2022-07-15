import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Deal } from '../_models/deal';

@Injectable({
  providedIn: 'root'
})
export class DealService {

  baseurl = "https://localhost:7152/api/Deal";

  constructor(public http:HttpClient) { }


  AddNewDeal(deal:Deal) {
    console.log("ser");
    return this.http.post<Deal>(this.baseurl,deal);
  }
  EditDeal(deal:Deal) {
    console.log(this.baseurl+deal.clientId+"/"+deal.teamtId+"/"+deal.projectId)
    return this.http.put<Deal>(this.baseurl+deal.clientId+"/"+deal.teamtId+"/"+deal.projectId, deal);
  }

/*

{
  "clientId": 2,
  "teamId": 1,
  "projectId": 3,
  "money": 500,
  "duration": 20,
  "done": false

}*/


}
