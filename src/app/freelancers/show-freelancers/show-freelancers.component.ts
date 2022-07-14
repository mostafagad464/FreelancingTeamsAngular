import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamMembersService } from 'src/app/team-profile/team-members.service';
import { TeamMember } from 'src/app/_models/team-member';
import { User } from 'src/app/_models/user';
import { FreelancerService } from 'src/app/_services/freelancer.service';

@Component({
  selector: 'app-show-freelancers',
  templateUrl: './show-freelancers.component.html',
  styleUrls: ['./show-freelancers.component.css']
})
export class ShowFreelancersComponent implements OnInit {

  constructor(private freelancerService:FreelancerService, 
    private activeroute:ActivatedRoute,
    private teamMemberService:TeamMembersService) { }

  freelancers: User [] = [];
  teamMember:TeamMember = new TeamMember(0, 0, false);
  searchText:string="";

  ngOnInit(): void {
    this.freelancerService.getFreelancers().subscribe(
      f=>{
        console.log(f);
        this.freelancers = f;
      }
    );
    this.activeroute.params.subscribe(a=>this.teamMember.teamId = a['id']);
  }

  addTeamMember(freelancerId:number)
  {
    this.teamMember.freelancerId = freelancerId;
    this.teamMemberService.addTeamMember(this.teamMember).subscribe(
      a=>console.log(a)
    )
    
    // document.getElementById("addTeamBtn")!.nodeValue = "Added";
  }

}
