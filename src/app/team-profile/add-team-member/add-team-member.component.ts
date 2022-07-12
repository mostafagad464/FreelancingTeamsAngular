import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Account } from 'src/app/_models/account';
import { Team } from 'src/app/_models/team';
import { TeamMember } from 'src/app/_models/team-member';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services/account.service';
import { TeamService } from 'src/app/_services/team.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-add-team-member',
  templateUrl: './add-team-member.component.html',
  styleUrls: ['./add-team-member.component.css']
})
export class AddTeamMemberComponent implements OnInit {

  constructor(public ac:ActivatedRoute, public TeamService:TeamService, public UserService: UserService, public AccountService:AccountService) { }

  team:Team=new Team(0,null,"",false,new Date(),"",0,0,0,"",[],[],[]);
  allFreelancers:User[] = [];
  OtherFreelancerAccounts:Account[]=[];
  newTeamMember:TeamMember = new TeamMember(0,0,false);

  sub:Subscription|null=null;

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  Save(){
    console.log(this.team)
      this.TeamService.AddTeamMember(this.newTeamMember).subscribe(t=>{
        alert('Congrats! freelancer was added successfully!');
        console.log(t);
        this.team = t;
      });
    
  }
  
  ngOnInit(): void {
    this.ac.params.subscribe(a=>{
      this.team.id = parseInt(a['id']);
      this.TeamService.getTeam(this.team.id).subscribe(a=>{
        this.team =a;
        this.newTeamMember.teamId = this.team.id;
        console.log(this.team);
      });
      this.UserService.getAllFreelancers().subscribe(f=>{
        this.allFreelancers = f;
        console.log(this.allFreelancers);
        
        for (let freelancer of this.allFreelancers) {
          if(!this.team.teamMembers.map(f=>f.freelancerId).includes(freelancer.id)){
            this.AccountService.getAccount(freelancer.id).subscribe(a=>{
              this.OtherFreelancerAccounts.push(a);
            });
          }
        }
      });
    })
    
  } 
}