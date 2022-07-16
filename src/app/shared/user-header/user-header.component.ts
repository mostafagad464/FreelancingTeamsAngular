import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Account } from 'src/app/_models/account';
import { Team } from 'src/app/_models/team';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services/account.service';
import { AuthService } from 'src/app/_services/auth.service';
import { NotificationService } from 'src/app/_services/notification.service';
import { TeamService } from 'src/app/_services/team.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {

  public isAuthenticated$ = this.AuthService.isAuthenticated$;
  user: User = new User(0, null, 0, 0, "", "", "", "", 0, false, "", false, false, null, null, false, null, null, null, null, null)
  account: Account = new Account(0, null, "", "", "", "", "", "", null);
  teams: Team[] = [];
  teamSelected: boolean = false;
  name = "";
  imgUrl = "";
  NoOfNot = 0;

  constructor(public AuthService: AuthService, public UserService: UserService, public TeamService: TeamService, public AccountService: AccountService, public NotificationService:NotificationService) { }

  ngOnInit(): void {
    this.isAuthenticated$.subscribe(authenticated => {
      if (authenticated) {
        this.user.id = this.AuthService.getCurrentUser()?.id;
        this.UserService.getUser(this.AuthService.getCurrentUser()?.id).subscribe(u => {
          this.user = u;
          if (this.user.freelancer) {
            this.teams = [];
            for (let teamMember of this.user.freelancerNavigation!.teamMembers) {
              this.TeamService.getTeam(teamMember.teamId).subscribe(t => {
                this.teams.push(t);
                console.log(this.teams)
              })
            }
          }
        });
        this.AccountService.getAccount(this.AuthService.getCurrentUser()?.id).subscribe(account => {
          this.account = account;
          this.name = account.firstName + " " + account.lastName;
        })
      }
      this.NotificationService.getNotNo(this.AuthService.getCurrentUser()?.id).subscribe(notNo=>{
        this.NoOfNot = notNo.count;
      })

    });
    
    
  }

  Switch(name:string,id:number){
    sessionStorage.setItem("team_id",id.toString());
    this.name = name
  }
  logout()
  {
    this.AuthService.DeleteToken();
  }

}
