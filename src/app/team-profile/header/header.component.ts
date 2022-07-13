import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Freelancer } from 'src/app/_models/freelancer';
import { Project } from 'src/app/_models/project';
import { TeamMember } from 'src/app/_models/team-member';
import { Team } from '../../_models/team'
import { FreelancersService } from '../freelancers.service';
import { TeamProfileService } from '../team-profile.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  constructor(public ac:ActivatedRoute,public teamServ:TeamProfileService, public freelancerServ:FreelancersService) { }

  
  
  
  checkP=""; //Your team's projects

  projects:Project[]=[

  ]

  projectsNames:string[]=[
    
  ]

  check(){
    this.checkP="Your team's projects";
  }
  
  team:Team={
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

  desc=this.team.description;
  rate=1;
  Search(){
    
  }

  Check(){
    this.title="Freelancers in your team";
    this.freelancerServ.getTeamMembers(this.teamId).subscribe(a=>{
      this.freelancers=a;
      this.teamMembers=a;})
  }

  teamMembers:TeamMember[]=[
    
  ]
  
  freelancers:Freelancer[]=[

  ]

  teamId=0;

  title='';
  
  ngOnInit(): void {
    this.ac.params.subscribe(a=>{
      this.teamServ.getTeamById(a['id']).subscribe(a=>{
      this.team=a;
      this.teamId=(a['id']);
      console.log(this.team);
      console.log(this.team.creationDate)
      console.log(this.team.name); 
    })
    })
    
    
  }

}
