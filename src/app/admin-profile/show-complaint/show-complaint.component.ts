import { Component, OnInit } from '@angular/core';
import { TeamMembersService } from 'src/app/team-profile/team-members.service';
import { TeamProfileService } from 'src/app/team-profile/team-profile.service';
import { Complain } from 'src/app/_models/complain';
import { AccountService } from 'src/app/_services/account.service';
import { ComplainService } from 'src/app/_services/complain.service';
import { TeamService } from 'src/app/_services/team.service';

@Component({
  selector: 'app-show-complaint',
  templateUrl: './show-complaint.component.html',
  styleUrls: ['./show-complaint.component.css']
})
export class ShowComplaintComponent implements OnInit {

  complains:Complain[]=[];
  complains1:Complain[]=[];
  comAndNames:{complain:Complain, name:string, hname:string}[]=[]
  ucomAndNames:{complain:Complain, name:string}[]=[]
  adminHandlers:string[]=[];


  constructor(public compSer:ComplainService, public accServ:AccountService, public teamServ:TeamService) { }

  ngOnInit(): void {
    this.compSer.getComplains().subscribe(a => {
      this.complains = a;
      for (let index = 0; index < this.complains.length; index++) {
        if(this.complains[index].adminHandlerId != null){
          if(this.complains[index].complainingUserId != null){
            this.accServ.getAccount(this.complains[index].complainingUserId!).subscribe(a => {
              this.accServ.getAccount(this.complains[index].adminHandlerId!).subscribe(b => {
                this.comAndNames.push({"complain":this.complains[index],"name":a.firstName + " " + a.lastName,"hname":b.firstName + " " + b.lastName})
              })
            })
          }
          else{
            if(this.complains[index].complainingTeamId != null){
              this.teamServ.getTeam(this.complains[index].complainingTeamId!).subscribe(a => {
                this.ucomAndNames.push({"complain":this.complains[index],"name":a.name});
              })
            }
          }
        }
        for (let index = 0; index < this.comAndNames.length; index++) {
          console.log("-----"+this.comAndNames[index].hname);
        }

        console.log("this.comAndNames: " + this.comAndNames)
        console.log("this.ucomAndNames: " + this.ucomAndNames)
       }
    }
    )
  }
}

