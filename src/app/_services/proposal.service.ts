import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proposal } from '../_models/proposal';


@Injectable({
  providedIn: 'root'
})
export class ProposalService {
  baseurl = "https://localhost:7152/api/proposal/";
  Proposals:Proposal[]=[new Proposal(0,0,0,"",null,new Date(),"")];
  constructor(public http: HttpClient) { }

  // getAllAccounts() {
  //   return this.http.get<any>(this.baseurl);
  // }

  GetAllProposals(){
    return this.http.get<Proposal[]>(this.baseurl);
  }

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

  GetProposalById(id: Number) {
    return this.http.get<Proposal>(this.baseurl + id);
  }



  AddProposal(prop: Proposal) {
    return this.http.post<Proposal>(this.baseurl, prop);
  }

  EditProposal(prop: Proposal) {
    return this.http.put<Proposal>(this.baseurl, prop);
  }

  // DeleteAccount(id: Number) {
  //   return this.http.delete(this.baseurl);
  // }




}
