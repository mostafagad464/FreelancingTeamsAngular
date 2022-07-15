import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/_models/project';
import { TeamMember } from 'src/app/_models/team-member';
import { AuthService } from 'src/app/_services/auth.service';
import { UserService } from 'src/app/_services/user.service';
import { Team } from '../../_models/team'
import { TeamMembersService } from '../team-members.service';
import { TeamProfileService } from '../team-profile.service';
import { ReviewsService } from './../../_services/reviews.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnChanges {

  noOfCpltdProj: number = 0;
  noOfRv: number = 0
  teamMembers: number[] = [];

  constructor(public ac: ActivatedRoute,
    public teamServ: TeamProfileService,
    public freelancerServ: TeamMembersService,
    public ReviewsService: ReviewsService,
    private teamMembersService: TeamMembersService,
    private authService: AuthService,
    private userService: UserService
  ) { }

  checkP = ""; //Your team's projects

  projects: Project[] = []

  projectsNames: string[] = []

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
    specialization: '',
    deals: [],
    reviews: [],
    teamMembers: []
  }
  title = '';
  freelancerId: number = 0;

  teamMember: TeamMember = new TeamMember(0, 0, false);
  isMember: boolean = false;
  haveAccess: boolean = false;
  isFreelancer: boolean = false;

  img = "../../../assets/images/1.png";
  desc = this.team.description;
  rate = 1;

  Search() {
  }

  check() {
    this.checkP = "Your team's projects";
  }

  Check() {
    this.title = "Freelancers in your team";
    this.freelancerServ.getTeamMembers(this.team.id).subscribe(a => {
      this.teamMembers = a;
    })
  }

  ngOnInit(): void {

    this.freelancerId = this.authService.getCurrentUser()?.id;
    this.ac.params.subscribe(a => {
      this.teamServ.getTeamById(a['id']).subscribe(a => {
        this.team = a;
        console.log(this.team);
        console.log(this.team.creationDate)
        console.log(this.team.name);
        this.Check();
        this.noOfCpltdProj = this.team.deals.filter(a => a.done == true).length;
        this.getReviews();
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
    })
    this.userService.getUser(this.authService.getCurrentUser()?.id).subscribe(u=>{
      this.isFreelancer = u.freelancer;
      console.log( "Is Freelancer",this.isFreelancer);
    })
    
    console.log("Is Freelancer", this.isFreelancer);
  }

  ngOnChanges(){
    this.userService.getUser(this.authService.getCurrentUser()?.id).subscribe(u=>{
      this.isFreelancer = u.freelancer;
      console.log( "Is Freelancer",this.isFreelancer);
    })
  }

  getReviews() {
    this.ReviewsService.getReviews().subscribe(r => {
      this.noOfRv = r.filter(a => a.rate > 4 && a.teamId == this.team.id).length;
    });
  }

  // Add Notification
  joinTeam(teamId: number) {
    this.teamMember.teamId = teamId;
    this.teamMembersService.addTeamMember(this.teamMember).subscribe(
      a => console.log(a)
    )
  }

  async checkfreelancer() {
    await this.userService.getUser(this.authService.getCurrentUser()?.id).subscribe(u => {
      this.isFreelancer = u.freelancer;
      console.log("Is Freelancer", this.isFreelancer);
    })
  }

}
