import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Account } from 'src/app/_models/account';
import { Freelancer } from 'src/app/_models/freelancer';
import { Team } from 'src/app/_models/team';
import { TeamMember } from 'src/app/_models/team-member';
import { AccountService } from 'src/app/_services/account.service';
import { TeamMembersService } from '../team-members.service';
import { TeamProfileService } from '../team-profile.service';

@Component({
  selector: 'app-show-members',
  templateUrl: './show-members.component.html',
  styleUrls: ['./show-members.component.css']
})
export class ShowMembersComponent implements OnInit {

  members: number[] = [];
  member: TeamMember = new TeamMember(0, 0, false);
  memberFreelancerId = '';
  memberAccessAllowed = '';
  names: string[] = [];
  teamId = 0;
  freelancerId = 0;

  constructor(public freelancerServ: TeamMembersService,
    public ac: ActivatedRoute,
    public teamServ: TeamProfileService,
    public accountServ: AccountService) { }


  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    this.sub1?.unsubscribe();
  }


  sub: Subscription | null = null;
  sub1: Subscription | null = null;


  Remove() {
    console.log(this.teamId)
    this.sub = this.ac.params.subscribe(a => {
      this.member.freelancerId = parseInt(this.memberFreelancerId);

      if (this.memberAccessAllowed == 'false') {
        this.member.accessAllowed = false;
      }
      else {
        this.member.accessAllowed = true;
      }
      console.log(this.member.freelancerId);
      console.log(this.memberFreelancerId);
      console.log(this.member);
      this.sub1 = this.freelancerServ.removeTeamMember(this.teamId, this.freelancerId).subscribe(a => {
        alert('freelancer removed successfully!');
        console.log(this.member);
      })
    })
  }

  ngOnInit(): void {

    console.log("show");

    this.ac.params.subscribe(a => {
      console.log("id:" + a['id']);
      this.teamId = (a['id']);
    });

    this.freelancerServ.getTeamMembers(this.teamId).subscribe(a => {
      this.members = a;
      console.log("teamMembers: " + this.members);
      for (let member of this.members) {
        this.accountServ.getAccount(member).subscribe(a => {
          this.names.push(a.firstName + " " + a.lastName);
          console.log(this.names);
        });
      }
    });
  }
}
