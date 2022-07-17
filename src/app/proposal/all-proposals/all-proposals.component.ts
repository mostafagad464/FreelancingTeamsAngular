import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proposal } from 'src/app/_models/proposal';
import { AuthService } from 'src/app/_services/auth.service';
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
  projectOwner:boolean = false;

  constructor(
    public router: Router,
    public ar: ActivatedRoute,
    public propSer: ProposalService,
    public teamSer: TeamService,
    private projectService: ProjectService,
    private authService: AuthService
  ) { }
  ngOnInit(): void {
    this.ProjId = this.ar.snapshot.params['id'];
    this.propSer.GetAllProposals().subscribe((a) => {
      a.forEach((element) => {
        if (element.projectId == this.ProjId) {
          this.teamsIds.push(element.teamId);
          this.Proposals.push(element);
          this.getNames(element.teamId);
        }
      });
      let pr = this.Proposals.splice(0, 1);

      this.projectService.getProject(this.ProjId).subscribe(
        a => {
          if (a.clientId == this.authService.getCurrentUser()?.id) {
            this.projectOwner = true;
          }
        }
      )


      console.log(this.Proposals);
      console.log(this.Proposals.length);
    });

    console.log(this.teamsNames)
    console.log(this.teamsIds)
  }
  getNames(Id: number) {

    this.teamSer.getTeam(Id).subscribe(a => {
      this.teamsNames.push(a.name);
    })
  }
}

