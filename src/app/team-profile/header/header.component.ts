import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Account } from 'src/app/_models/account';
import { Freelancer } from 'src/app/_models/freelancer';
import { Project } from 'src/app/_models/project';
import { Skill } from 'src/app/_models/skill';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services/account.service';
import { SkillService } from 'src/app/_services/skill.service';
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
export class HeaderComponent implements OnInit {

  noOfCpltdProj: number = 0;
  noOfRv: number = 0
  teamMembers: number[] = [];

  constructor(public ac: ActivatedRoute,
               public teamServ: TeamProfileService, 
               public freelancerServ: TeamMembersService, 
               public ReviewsService: ReviewsService, 
               public userServ:UserService, 
               public accServ:AccountService,
               public skillServ:SkillService) { }

  checkP = ""; //Your team's projects
  projects: Project[] = []
  projectsNames: string[] = []
  allFreelancers:User[]=[]
  freelancersSkills:Skill[]=[]
  teamMembers1:Number[]=[]
  skills:string[]=[]
  distinctSkills:string[]=[]

  check() {
    this.checkP = "Your team's projects";
  }

  team: Team = {
    id: 0,
    logo: '',
    webSite: '',
    isVerfied: false,
    creationDate: new Date(1/1/2030),

    description: '',
    rate: 0,
    leaderId: 0,
    walletId: 0,

    name:'',
    specialization:'',
    deals:[],
    reviews:[],
    teamMembers:[]
  }

  img="../../../assets/images/1.png";

  desc = this.team.description;
  rate = 1;
  Search() {

  }

  Check() {
    this.title = "Freelancers in your team";
    this.freelancerServ.getTeamMembers(this.team.id).subscribe(a => {
      this.teamMembers = a;
    })
  }
  
  onlyUnique(value:any, index:any, self:any) {
    return self.indexOf(value) === index;
  }
  
  // usage example:
  // var a = ['a', 1, 'a', 2, '1'];

  title = '';

  ngOnInit(): void {
    this.ac.params.subscribe(a => {
      this.teamServ.getTeamById(a['id']).subscribe(a => {
        this.team = a;
        console.log(this.team);
        console.log(this.team.creationDate)
        console.log(this.team.name);
        this.Check();
        this.noOfCpltdProj = this.team.deals.filter(a => a.done == true).length;
        this.getReviews();

        this.userServ.getAllFreelancers().subscribe(f=>{
          this.allFreelancers = f;
          console.log(this.allFreelancers);

          this.freelancerServ.getTeamMembers(this.team.id).subscribe(t => {
            this.teamMembers1 = t;
            this.skillServ.getFreelancersSkills().subscribe(s => {
              for(let i = 0 ; i < s.length ; i++){
                if(this.teamMembers1.includes(s[i].freelancerId)){
                  this.skillServ.getSkill(s[i].skillId).subscribe(k => {
                    this.skills.push(k.name);
                    console.log("this.skills: " + this.skills)
                    this.distinctSkills = this.skills.filter(this.onlyUnique);
                  })
                }
              }

              // this.distinctSkills = this.skills.filter((n, i) => this.skills.indexOf(n) === i);
              // console.log(this.distinctSkills);
            })
          })
          
          // for (let freelancer of this.allFreelancers) {
          //   if(!this.team.teamMembers.map(f=>f.freelancerId).includes(freelancer.id)){
          //     this.accServ.getAccount(freelancer.id).subscribe(a=>{
          //       this.OtherFreelancerAccounts.push(a);
          //     });
          //   }
          // }
        });
      })
    })
  }
  getReviews() {
    this.ReviewsService.getReviews().subscribe(r => {
      this.noOfRv = r.filter(a => a.rate > 4 && a.teamId == this.team.id).length;
    });
  }

}
