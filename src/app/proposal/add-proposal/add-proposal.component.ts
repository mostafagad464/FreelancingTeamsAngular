import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Proposal } from 'src/app/_models/proposal';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { ProjectService } from 'src/app/_services/project.service';
import { Project } from 'src/app/_models/project';
import { ProposalService } from 'src/app/_services/proposal.service';
import {Router} from "@angular/router";


@Component({
  selector: 'app-add-proposal',
  templateUrl: './add-proposal.component.html',
  styleUrls: ['./add-proposal.component.css']
})
export class AddProposalComponent implements OnInit {
  TeamId:number=1; //Temp
  ProjId:number=-1;
  ProjName:string="";
  ProjDesc:string="";
  //
  prop:Proposal=new Proposal(0,this.TeamId,this.ProjId,"",null,new Date(),"");

  constructor(public  router:Router,public ar:ActivatedRoute,public ProjService:ProjectService,public propSer:ProposalService) {
  }

ADD(){
  this.propSer.AddProposal(this.prop).subscribe(a=>{
    console.log("Added");
    console.log(a.description);
  })
}
  CalcDuration(){
    var today: Date = new Date();
   this.prop.duration =this.getDayDiff(new Date(today), new Date(this.prop.date)).toString();
   console.log(this.prop.duration);
  }
  ngOnInit(): void {
    this.ProjId=this.ar.snapshot.params['ProjId']
    this.prop.projectId=this.ProjId;
    this.ProjService.getProjectById(this.ProjId).subscribe(a => {
      if (a!=null){
      this.ProjName=a.title;
      this.ProjDesc=a.description;
      console.log(a.id);
      }
     else
     {
      console.log("Project Not Found");

      this.ProjId=-1;
     }
        }
      );
  }
   getDayDiff(startDate: Date, endDate: Date): number {
    const msInDay = 24 * 60 * 60 * 1000;

    return Math.round(Math.abs(Number(endDate) - Number(startDate)) / msInDay);
  }


}
