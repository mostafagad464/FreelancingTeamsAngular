import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/_models/project';
import { TeamMember } from 'src/app/_models/team-member';
import { Team } from '../../_models/team'
import { FreelancersService } from '../freelancers.service';
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

  constructor(public ac: ActivatedRoute, public teamServ: TeamProfileService, public freelancerServ: FreelancersService, public ReviewsService: ReviewsService) { }

  checkP = ""; //Your team's projects

  projects: Project[] = [

  ]

  projectsNames: string[] = [

  ]

  check() {
    this.checkP = "Your team's projects";
  }

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
    teamMembers: []
  }

  img = "../../../assets/images/1.png";

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



  // teamId=0;

  title = '';

  ngOnInit(): void {
    this.ac.params.subscribe(a => {
      this.teamServ.getTeamById(a['id']).subscribe(a => {
        this.team = a;
        // this.teamId=(a['id']);
        console.log(this.team);
        console.log(this.team.creationDate)
        console.log(this.team.name);
        this.Check();
        this.noOfCpltdProj = this.team.deals.filter(a => a.done == true).length;
        this.getReviews();
      })
    })
  }
  getReviews() {
    this.ReviewsService.getReviews().subscribe(r => {
      this.noOfRv = r.filter(a => a.rate > 4 && a.teamId == this.team.id).length;
    });
  }

}
