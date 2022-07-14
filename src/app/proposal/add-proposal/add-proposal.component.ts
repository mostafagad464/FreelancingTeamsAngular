import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Proposal } from 'src/app/_models/proposal';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { ProjectService } from 'src/app/_services/project.service';
import { Project } from 'src/app/_models/project';
import { ProposalService } from 'src/app/_services/proposal.service';
import {Router} from "@angular/router";
import { AuthService } from 'src/app/_services/auth.service';
import { UserService } from 'src/app/_services/user.service';


@Component({
  selector: 'app-add-proposal',
  templateUrl: './add-proposal.component.html',
  styleUrls: ['./add-proposal.component.css']
})
export class AddProposalComponent implements OnInit {
  teamsIds:number[]=[];

  TeamId:number=1; //Temp
  ProjId:number=-1;
  ProjName:string="";
  ProjDesc:string="";
  //
  changeTeam(){
    this.prop.teamId=this.TeamId;
  }
  prop:Proposal=new Proposal(0,this.TeamId,this.ProjId,"",null,new Date(),"");

  constructor(public  router:Router,public ar:ActivatedRoute,public ProjService:ProjectService
    ,public propSer:ProposalService,public auth:AuthService,public userSer:UserService) {
  }

ADD(){
  this.propSer.AddProposal(this.prop).subscribe(a=>{
    console.log("Added");
    console.log(a.description);

  })
  // this.propSer.GetAllProposals().subscribe(a=>{
  //   a.forEach(element => {
  //     if(element.teamId==this.prop.teamId&&element.projectId==this.prop.projectId&&element.date==this.prop.date&&element.description==this.prop.description)
  //     {
  //       this.prop.id=element.id;
  //       console.log(this.prop)
  //     }

  //   });
  // }) //to asign Id From DB :/
}
  CalcDuration(){
    var today: Date = new Date();
   this.prop.duration =this.getDayDiff(new Date(today), new Date(this.prop.date)).toString();
   console.log(this.prop.duration);
  }
  ngOnInit(): void {
    let id=this.auth.getCurrentUser()?.id;
    console.log(id);

    this.userSer.GetUserToGetTeams(id).subscribe(a=>{
      a.freelancerNavigation.teamMembers.forEach((element: { teamId: number; }) => {
      this.teamsIds.push(element.teamId)

      });
      console.log(this.teamsIds)
    })

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
