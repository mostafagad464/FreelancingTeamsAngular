import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamMembersService } from 'src/app/team-profile/team-members.service';
import { Account } from 'src/app/_models/account';
import { Notifications } from 'src/app/_models/notifications';
import { TeamMember } from 'src/app/_models/team-member';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services/account.service';
import { AuthService } from 'src/app/_services/auth.service';
import { FreelancerService } from 'src/app/_services/freelancer.service';
import { NotificationService } from 'src/app/_services/notification.service';
import { TeamService } from 'src/app/_services/team.service';

@Component({
  selector: 'app-show-freelancers',
  templateUrl: './show-freelancers.component.html',
  styleUrls: ['./show-freelancers.component.css']
})
export class ShowFreelancersComponent implements OnInit {

  constructor(private freelancerService: FreelancerService,
    private activeroute: ActivatedRoute,
    private teamMemberService: TeamMembersService,
    private teamSevice: TeamService,
    private authService: AuthService,
    private notificationService: NotificationService,
    private accountService: AccountService) { }

  freelancers: User[] = [];
  image: string = "../../../assets/images/freelancer.png";
  accountData: Account[] = [];
  names: string[] = [];
  teamMember: TeamMember = new TeamMember(0, 0, false);
  searchText: string = "";
  teamMembersIds: number[] = [];
  public isAuthenticated$ = this.authService.isAuthenticated$;
  notification: Notifications = new Notifications(0, "", "", 0, false, false, new Date(1990, 1, 1));


  ngOnInit(): void {
    this.isAuthenticated$.subscribe(authenticated => { });

    this.freelancerService.getFreelancers().subscribe(
      f => {
        console.log(f);
        this.freelancers = f;
      }
    );
    this.accountService.getAccounts().subscribe(
      f => {
        console.log(f);
        this.accountData = f;
      }
    );

    this.activeroute.params.subscribe(a => this.teamMember.teamId = a['id']);

    this.teamSevice.getTeam(this.teamMember.teamId).subscribe(
      t => {
        for (let i = 0; i < t.teamMembers.length; i++) {
          let flag = false;
          for (let j = 0; j < this.freelancers.length && flag == false; j++) {
            if (t.teamMembers[i].freelancerId == this.freelancers[j].id) {
              this.teamMembersIds.push(this.freelancers[j].id);
              flag = true;
            }
          }
        }
      }
    )

    console.log(this.teamMembersIds);
  }

  // addTeamMember(freelancerId: number) {
  //   this.teamMember.freelancerId = freelancerId;
  //   this.teamMemberService.addTeamMember(this.teamMember).subscribe(
  //     a => console.log(a)
  //   )

  //   // document.getElementById("addTeamBtn")!.nodeValue = "Added";
  // }
  requestAddTeamMember(freelancerId: number) {
    this.teamSevice.getTeam(this.teamMember.teamId).subscribe(team=>{

      this.notification.date = new Date();
      this.notification.description = "Team: " + team.name+ " have an offer for you to join the team.";
      this.notification.type = "team/teamProfile/";
      this.notification.type_id = this.teamMember.teamId;
      this.notificationService.postAccountNotification(freelancerId, this.notification).subscribe(
        a => console.log(a)
      );
    })

  }

}



//<ng-template [ngIf]="isAuthenticated$ | async">