import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Account } from 'src/app/_models/account';
import { Team } from 'src/app/_models/team';
import { TeamMember } from 'src/app/_models/team-member';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services/account.service';
import { TeamMembersService } from '../team-members.service';
import { UserProfileService } from 'src/app/_services/user-profile.service';
import { TeamProfileService } from '../team-profile.service';
import { AuthService } from 'src/app/_services/auth.service';
import { UserService } from 'src/app/_services/user.service';
import { FreelancerService } from 'src/app/_services/freelancer.service';
import { Freelancer } from 'src/app/_models/freelancer';
import { TeamService } from 'src/app/_services/team.service';
import { ConsoleLogger } from '@microsoft/signalr/dist/esm/Utils';

@Component({
  selector: 'app-show-members',
  templateUrl: './show-members.component.html',
  styleUrls: ['./show-members.component.css']
})
export class ShowMembersComponent implements OnInit {

  image = "https://bootdey.com/img/Content/avatar/avatar7.png";
  members: number[] = [];
  member: TeamMember = new TeamMember(0, 0, false);
  user: User =
    {
      id: 0,
      birthDate: "",
      replySpeed: 0,
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
      idNavigation: new Account(0, 0, "", "", "", "", "", "", null),
      wallet: null,
      clientNavigation: null,
      freelancerNavigation: null,
    }
  users: User[] = []
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

  // teamMember: TeamMember = new TeamMember(0, 0, false);
  isMember: boolean = false;
  haveAccess: boolean = false;
  membersHaveAccess: boolean[] = [];
  isFreelancer: boolean = false;
  freelancer: any;
  teamMember: TeamMember = new TeamMember(0, 0, false);
  myMap = new Map<number, boolean>();

  constructor(public freelancerServ: TeamMembersService,
    public ac: ActivatedRoute,
    public teamServ: TeamProfileService,
    public accountServ: AccountService,
    public userServ: UserProfileService,
    private authService: AuthService,
    private userService: UserService,
    private freelancerService: FreelancerService,
    private teamService: TeamService) { }


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
    this.userService.getUser(this.authService.getCurrentUser()?.id).subscribe(u => {
      this.isFreelancer = u.freelancer;
      console.log("Is Freelancer", this.isFreelancer);
    })

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

        this.teamService.getTeam(this.teamId).subscribe(
          t => {
            for (let i = 0; i < t.teamMembers.length; i++) {
              if (t.teamMembers[i].accessAllowed == true) {
                this.myMap.set(t.teamMembers[i].freelancerId, t.teamMembers[i].accessAllowed);
              }
            }
          }
        )
        for (let [key, value] of this.myMap) {
          console.log(key, value);
        }
        // console.log(this.myMap);
      }
      for (var i = 0; i < this.members.length; i++) {
        this.userServ.getUserInfoByid(this.members[i]).subscribe(a => {
          this.users.push(a);
          console.log("users: " + this.users);
        })
      }

    })
      .add(() => {
        for (let i = 0; this.team.teamMembers.length; i++) {
          if (this.team.teamMembers[i].freelancerId == this.freelancerId) {
            this.isMember = true;
          }
          if (this.team.teamMembers[i].accessAllowed == true) {
            this.haveAccess = true;
          }
        }
      })
    // });
  }
}
