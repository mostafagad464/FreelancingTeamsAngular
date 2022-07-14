import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Account } from 'src/app/_models/account';
import { Freelancer } from 'src/app/_models/freelancer';
import { Team } from 'src/app/_models/team';
import { TeamMember } from 'src/app/_models/team-member';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services/account.service';
import { UserProfileService } from 'src/app/_services/user-profile.service';
import { FreelancersService } from '../freelancers.service';
import { TeamProfileService } from '../team-profile.service';

@Component({
  selector: 'app-show-members',
  templateUrl: './show-members.component.html',
  styleUrls: ['./show-members.component.css']
})
export class ShowMembersComponent implements OnInit {

  image="https://bootdey.com/img/Content/avatar/avatar7.png";
  members: number[] = [];
  member: TeamMember = new TeamMember(0, 0, false);
  user:User =
  {
    id: 0,
    birthDate: "",
    replySpeed:	0,
    phone: 0,
    registerDate: "",
    country: "",
    state: "",
    image: "",
    rate: 0,
    activeStatus: false,
    bio: "",
    client: false,
    freelancer: false,
    adminValidated: 0,
    walletId: 0,
    validated: false,
    adminValidatedNavigation: null,
    idNavigation: new Account(0,0,"","","","","","",null),
    wallet: null,
    clientNavigation: null,
    freelancerNavigation:null,
  }
  users:User[]=[]
  memberFreelancerId = '';
  memberAccessAllowed = '';
  names: string[] = [];
  teamId = 0;
  freelancerId = 0;
  team: Team = {
    id: 0,
    logo: '',
    webSite: '',
    isVerfied: false,
    creationDate: new Date(1 / 1 / 2030),
    description: '',
    rate: 0,
    leaderId: 0,
    walletId: 0,
    name: '',
    deals: [],
    reviews: [],
    teamMembers: [],
    specialization: ''
  }

  constructor(public freelancerServ: FreelancersService,
    public ac: ActivatedRoute,
    public teamServ: TeamProfileService,
    public accountServ: AccountService,
    public userServ:UserProfileService) { }


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
      for(var i = 0 ; i < this.members.length ; i++){
        this.userServ.getUserInfoByid(this.members[i]).subscribe(a => {
          // this.user=a;
          this.users.push(a);
          console.log("users: "+this.users);
        })
      }
  
    });
  }
}
