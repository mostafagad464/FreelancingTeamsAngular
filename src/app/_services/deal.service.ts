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
  // GetAllProposals(){
  //   return this.http.get<Proposal[]>(this.baseurl);
  // }

//   GetProposalByProjectId(id: Number):Proposal[] {
//     this.http.get<Proposal[]>(this.baseurl).subscribe(a=>{
//       a.forEach(element => {
//         if(element.projectId ==id)
//         {
// this.Proposals.push(element);
// console.log(element);
// }});
//     let pr=this.Proposals.splice(0, 1);

// // console.log(this.Proposals);
// // console.log(this.Proposals.length);

//   }

//   )
// return this.Proposals;
// }

  // GetProposalById(id: Number) {
  //   return this.http.get<Proposal>(this.baseurl + id);
  // }





  // DeleteAccount(id: Number) {
  //   return this.http.delete(this.baseurl);
  // }


}
