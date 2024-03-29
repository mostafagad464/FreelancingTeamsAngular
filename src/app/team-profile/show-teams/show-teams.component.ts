import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Notifications } from 'src/app/_models/notifications';
import { Team } from 'src/app/_models/team';
import { TeamMember } from 'src/app/_models/team-member';
import { AccountService } from 'src/app/_services/account.service';
import { AuthService } from 'src/app/_services/auth.service';
import { NotificationService } from 'src/app/_services/notification.service';
import { TeamService } from 'src/app/_services/team.service';
import { UserService } from 'src/app/_services/user.service';
import { TeamMembersService } from '../team-members.service';

@Component({
  selector: 'app-show-teams',
  templateUrl: './show-teams.component.html',
  styleUrls: ['./show-teams.component.css']
})

export class ShowTeamsComponent implements OnInit {

  constructor(private teamService: TeamService,
    private teamMembersService: TeamMembersService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private userService: UserService,
    private notificationService: NotificationService,
    private accountService: AccountService
  ) { }

  teams: Team[] = [];
  stringId: string = "";
  teamMember: TeamMember = new TeamMember(0, 0, false);
  searchTeaxt: string = "";
  id: number = 0;
  flag: boolean = false;
  isClient: boolean = false;
  userId: number = 0;
  isMember: boolean = false;
  notification: Notifications = new Notifications(0, "", "", 0, false, false, new Date());

  ngOnInit(): void {
    this.userService.getUser(this.authService.getCurrentUser()?.id).subscribe(u => {
      this.isClient = u.client;
    })
    this.teamMember.freelancerId = this.authService.getCurrentUser()?.id;
    this.userId = this.authService.getCurrentUser()?.id;

    this.teamService.getTeams().subscribe(
      t => {
        console.log(t);
        this.route.params.subscribe(a => this.id = a['id']);
        if (this.id > 0) {
          for (let i = 0; i < t.length; i++) {
            for (let j = 0; j < t[i].teamMembers.length; j++) {
              if (t[i].teamMembers[j].freelancerId == this.id) {
                this.teams.push(t[i]);
              }
            }
          }
          console.log(this.teams);
          this.flag = true;
        }
        else {
          this.flag = true;
          this.teams = t;
        }
      }
    )
  }
  // Add Notification
  // joinTeam(teamId: number) {
  //   this.teamMember.teamId = teamId;
  //   this.teamMembersService.addTeamMember(this.teamMember).subscribe(
  //     a => console.log(a)
  //   )
  // }

  requestJoinTeam(teamId: number) {
    this.teamMember.teamId = teamId;

    this.accountService.getAccount(this.authService.getCurrentUser()?.id).subscribe(account => {

      this.teamService.getTeam(teamId).subscribe(team => {

        this.notification.date = new Date();
        this.notification.description = "Freelancer: " + account.firstName + " " + account.lastName + " wants to join your team: " + team.name;
        this.notification.type = "profile/*"+teamId;
        this.notification.type_id = this.authService.getCurrentUser()?.id;
        this.notificationService.postAccountNotification(team.leaderId, this.notification).subscribe(
          a => {
            console.log(a);
          }
        );
      });


    })

    // this.teamMembersService.addTeamMember(this.teamMember).subscribe(
    //   a => console.log(a)
    // );
  }

}
