import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Proposal } from 'src/app/_models/proposal';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ProjectService } from 'src/app/_services/project.service';
import { Project } from 'src/app/_models/project';
import { ProposalService } from 'src/app/_services/proposal.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { UserService } from 'src/app/_services/user.service';
import { TeamService } from 'src/app/_services/team.service';
import { NotificationService } from 'src/app/_services/notification.service';
import { Notifications } from 'src/app/_models/notifications';

@Component({
  selector: 'app-add-proposal',
  templateUrl: './add-proposal.component.html',
  styleUrls: ['./add-proposal.component.css'],
})
export class AddProposalComponent implements OnInit {
  teamsIds: number[] = [];
  teamsNames: string[] = [];
  IsNotCompleted: boolean = true;

  TeamId: number = 0; //Temp
  ProjId: number = -1;
  ProjName: string = '';
  ProjDesc: string = '';
  TeamName: string = '';
  notification: Notifications = new Notifications(0, "", "", 0, false, false, new Date(1990, 1, 1));

  //
  changeTeam(event: any) {
    this.prop.teamId = this.teamsIds[event.target.value]
    console.log(this.TeamName);
    this.TeamName = this.teamsNames[event.target.value];
    console.log(this.TeamName);

  }
  prop: Proposal = new Proposal(
    0,
    this.TeamId,
    this.ProjId,
    '',
    null,
    new Date(),
    ''
  );

  constructor(
    public router: Router,
    public ar: ActivatedRoute,
    public ProjService: ProjectService,
    public propSer: ProposalService,
    public auth: AuthService,
    public userSer: UserService,
    public teamser: TeamService,
    public notificationService: NotificationService
  ) { }


  ngOnInit(): void {
    this.ProjId = this.ar.snapshot.params['ProjId'];
    this.prop.projectId = this.ProjId;

    let id = this.auth.getCurrentUser()?.id;
    console.log("user ID : " + id);

    this.userSer.GetUserToGetTeams(id).subscribe((a) => {
      a.freelancerNavigation.teamMembers.forEach(
        (element: { teamId: number }) => {
          this.getteamname(element.teamId)

          this.teamsIds.push(element.teamId);
        }
      );
      console.log(this.teamsIds);
      console.log(this.teamsNames);
    });


    this.ProjService.getProjectById(this.ProjId).subscribe((a) => {
      if (a != null) {
        this.ProjName = a.title;
        this.ProjDesc = a.description;
        console.log("project Id : " + a.id);
      } else {
        console.log('Project Not Found');

        this.ProjId = -1;

      }
    });
    console.log(this.prop)
  }

  //-------------------------------------Additional Methods-------------------------------------

  //------------------------
  getteamname(id: number) {
    this.teamser.getTeam(id).subscribe(a => {
      this.teamsNames.push(a.name);
    })

  }
  //---------------------------------
  getDayDiff(startDate: Date, endDate: Date): number {
    const msInDay = 24 * 60 * 60 * 1000;

    return Math.round(Math.abs(Number(endDate) - Number(startDate)) / msInDay);
  }
  //---------------------------------
  CalcDuration() {
    var today: Date = new Date();
    this.prop.duration = this.getDayDiff(
      new Date(today),
      new Date(this.prop.date)
    ).toString();
    console.log(this.prop.duration);
  }
  //---------------------------------
  ADD() {
    this.propSer.AddProposal(this.prop).subscribe((a) => {
      console.log('Added');
      console.log(a.description);
      console.log(this.prop)
      this.IsNotCompleted = false;

      this.ProjService.getProject(this.prop.projectId).subscribe(project=>{

        this.notification.date = new Date();
        this.notification.description = "Team: " + this.TeamName + " add proposal for your project, " + this.ProjName;
        this.notification.type = "AllProposals/";
        this.notification.type_id = a.projectId;
        this.notificationService.postAccountNotification(project.clientId, this.notification).subscribe(
          a => {
            console.log(a);
          }
        );
      })



    });
  }


}
