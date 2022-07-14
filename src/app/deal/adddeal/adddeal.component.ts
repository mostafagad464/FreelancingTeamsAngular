import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Deal } from 'src/app/_models/deal';
import { DealService } from 'src/app/_services/deal.service';

@Component({
  selector: 'app-adddeal',
  templateUrl: './adddeal.component.html',
  styleUrls: ['./adddeal.component.css']
})
export class AdddealComponent implements OnInit {

  constructor(public dealSer:DealService,public router:Router,public ar:ActivatedRoute) { }
ClientId:number=1;
TeamId:number=1;
ProjectId:number=1;
deal:Deal=new Deal(this.ClientId,this.TeamId,this.ProjectId,0,0,null,null,null,null)
// Add(){
//   this.dealSer.AddNewDeal().subscribe(a=>{
//     console.log("Added");
//     console.log(a.clientId);

//   })
// }
// edit(){
//   this.dealSer.EditDeal(this.deal).subscribe(a=>{
//     console.log(a.duration);
//     console.log("Edited");

//   })

// }
  ngOnInit(): void {

  }

}
/*
{
  "clientId": 1,
  "teamId": 8,
  "projectId": 2,
  "money": 20000,
  "duration": 20,
  "done": null,
  "client": null,
  "project": null,
  "team": null
     public clientId:number,
        public teamtId:number,
        public projectId:number,
        public money:number,
        public duration:number,
        public done:boolean
}*/
