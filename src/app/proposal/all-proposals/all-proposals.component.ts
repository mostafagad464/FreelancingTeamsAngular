import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proposal } from 'src/app/_models/proposal';
import { ProjectService } from 'src/app/_services/project.service';
import { ProposalService } from 'src/app/_services/proposal.service';
import { TeamService } from 'src/app/_services/team.service';

@Component({
  selector: 'app-all-proposals',
  templateUrl: './all-proposals.component.html',
  styleUrls: ['./all-proposals.component.css'],
})
export class AllProposalsComponent implements OnInit {
  ProjId: number = 0;
  Proposals: Proposal[] = [new Proposal(0, 0, 0, '', null, new Date(), '')];
  teamsIds: number[] = [];
  teamsNames: string[] = [];

  constructor(
    public router: Router,
    public ar: ActivatedRoute,
    public propSer: ProposalService,
    public teamSer: TeamService
  ) {}
  ngOnInit(): void {
    this.ProjId = this.ar.snapshot.params['ProjId'];
    this.propSer.GetAllProposals().subscribe((a) => {
      a.forEach((element) => {
        if (element.projectId == this.ProjId) {
          this.Proposals.push(element);
          this.teamsIds.push(element.teamId);
          // console.log(element);
        }
      });
      let pr = this.Proposals.splice(0, 1);

      console.log(this.Proposals);
      console.log(this.Proposals.length);
    });
    this.getNames();
    console.log(this.teamsIds)
  }
  getNames(){
    for (let i=0;i<this.teamsIds.length;i++){
      this.teamSer.getTeam(this.teamsIds[i]).subscribe(a=>{
        this.teamsNames.push(a.name);
        console.log(a.name)
      })

    }
  }
}

