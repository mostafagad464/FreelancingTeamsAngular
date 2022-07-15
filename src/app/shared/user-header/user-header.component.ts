import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/_models/team';
import { User } from 'src/app/_models/user';
import { AuthService } from 'src/app/_services/auth.service';
import { TeamService } from 'src/app/_services/team.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {

  user : User = new User(0,null,0,0,"","","","",0,false,"",false,false,null,null,false,null,null,null,null,null)
  teams :Team[] =[];

  constructor(public AuthService: AuthService, public UserService: UserService, public TeamService:TeamService) { }

  ngOnInit(): void {
    if(this.AuthService.getCurrentUser()){
      this.user.id = this.AuthService.getCurrentUser()?.id;
      this.UserService.getUser(this.user.id).subscribe(u=>{
        this.user = u;
        if (this.user.freelancer) {
          for (let teamMember of this.user.freelancerNavigation!.teamMembers) {
            this.TeamService.getTeam(teamMember.teamId).subscribe(t=>{
              this.teams.push(t);
              console.log(this.teams)
            })
          }
        } 
      });
    }
  }

}
