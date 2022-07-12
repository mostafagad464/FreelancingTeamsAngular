import { sanitizeIdentifier } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Account } from 'src/app/_models/account';
import { Client } from 'src/app/_models/client';
import { Deal } from 'src/app/_models/deal';
import { Project } from 'src/app/_models/project';
import { ProjectClient } from 'src/app/_models/project-client';
import { ProjectReviewClient } from 'src/app/_models/project-review-client';
import { Review } from 'src/app/_models/review';
import { Team } from 'src/app/_models/team';
import { TeamMember } from 'src/app/_models/team-member';
import { UserAccount } from 'src/app/_models/user-account';
import { AccountService } from 'src/app/_services/account.service';
import { ClientsService } from 'src/app/_services/clients.service';
import { ProjectService } from 'src/app/_services/project.service';
import { ProjectsService } from 'src/app/_services/projects.service';
import { ReviewsService } from 'src/app/_services/reviews.service';
import { TeamProfileService } from '../team-profile.service';

@Component({
  selector: 'app-show-projects',
  templateUrl: './show-projects.component.html',
  styleUrls: ['./show-projects.component.css']
})
export class ShowProjectsComponent implements OnInit {

  names:string[]=[

  ]
  
  team:Team={
    id: 0,
    logo: '',
    webSite: '',
    isVerified: false,
    creationDate: new Date(1/1/2030),
    description: '',
    rate: 0,
    leaderId: 0,
    walletId: 0,
    name:'',
    deals:[],
    reviews:[],
    teamMembers:[]
  }

  reviwes:Review[]=[

  ]

  anotherReviews:Review[]=[

  ]

  sAnother:Review[]=[

  ]

  review:string[]=[

  ]

  revieww:Review={
    clientId: 0,
    teamId:0,
    projectId:0,
    rate:0,
    content:"",
    date:new Date,
    fromClient:""
  }

  deals:Deal[]=[

  ]

  clients:Client[]=[

  ]

  projectReviewClient=new ProjectReviewClient('','','',0)

  projectsReviewsClients:ProjectReviewClient[]=[

  ]

  projectsClients:ProjectClient[]=[

  ]

  // projectsReviewsClientsIds:number[]=[

  // ]

  clientsNames:string[]=[
    
  ]

  projectsNames:string[]=[
    
  ]


  member:TeamMember=new TeamMember(0,0,false);

  completed:number[]=[

  ]

  inCompleted:number[]=[
    
  ]

  cClients:number[]=[

  ]

  iClients:number[]=[

  ]

  projects:Project[]=[

  ]

  completedTitles:string[]=[

  ]

  inCompletedTitles:string[]=[
    
  ]

  cClientsNames:string[]=[

  ]

  iClientsNames:string[]=[

  ]

  accounts:Account[]=[

  ]

  cCFName='';
  cCLName='';

  iCFName='';
  iCLName='';

  constructor(
               public clientsServ:ClientsService,
               public revServ:ReviewsService,
               public prjectServ:ProjectsService,
               public teamServ:TeamProfileService,
               public accountServ:AccountService,
               public ac:ActivatedRoute
              ) { }

  ngOnInit(): void {
    this.ac.params.subscribe(a=>{
    this.teamServ.getTeamById(a['id']).subscribe(a=>{
      this.team=a;
      console.log("team: "+this.team.name);
      console.log(this.team.id);
      console.log("deals: "+this.team.deals)

    this.prjectServ.getProjects().subscribe(a=>{
      this.projects=a;
      console.log(a);

      this.clientsServ.getClients().subscribe(a=>{
        this.clients=a;
      })

      for(var i=  0; i <this.team.deals.length; i++){
        if(this.team.deals[i].done){
          this.completed.push(this.team.deals[i].projectId);
          this.cClients.push(this.team.deals[i].clientId);
        }
        else{
          this.inCompleted.push(this.team.deals[i].projectId);
          this.iClients.push(this.team.deals[i].clientId);
        }
      }
    
      for (let i = 0; i < this.projects.length; i++) {
          for(let y = 0; y < this.completed.length; y++){
            if(this.projects[i].id == this.completed[y]){
              this.completedTitles.push(this.projects[i].title);
              console.log("**"+this.projects[i].id+"**"+this.completed[y])
            }
            else if(this.projects[i].id == this.inCompleted[y]){
              this.inCompletedTitles.push(this.projects[i].title);
              console.log("****"+this.projects[i].id+"**"+this.completed[y])

            }
          }
        }
        console.log("comtitle"+this.completedTitles)

        console.log(this.projects)

    })
    
    this.accountServ.getAccounts().subscribe(a=>{
      this.accounts=a;
      console.log("acc, "+a+"accc, "+this.accounts)
      for(var i = 0 ; i < this.accounts.length; i++){
        for(var y = 0 ; y < this.cClients.length; y++){
          if(this.accounts[i].id == this.cClients[y]){
            this.cCFName=this.accounts[i].firstName;
            this.cCLName=this.accounts[i].lastName;
            this.cClientsNames.push(this.cCFName+" "+this.cCLName)
          }
        }
      }

      for(var i = 0 ; i < this.accounts.length; i++){
        for(var y = 0 ; y < this.iClients.length; y++){
          if(this.accounts[i].id == this.iClients[y]){
            this.iCFName=this.accounts[i].firstName;
            this.iCLName=this.accounts[i].lastName;
            this.iClientsNames.push(this.iCFName+" "+this.iCLName)
          }
        }
      }
      console.log("com: "+this.cClientsNames);
      console.log("icom: "+this.iClientsNames);
    })
  

  console.log("compl:"+this.completed+", incompl:"+this.inCompleted)  
    })   
    })

    this.ac.params.subscribe(a=>{
      this.teamServ.getTeamById(a['id']).subscribe(a=>{
        this.team=a;
        console.log("a: "+a)
        this.reviwes=a.reviews;
        console.log("teamRev: "+a.reviews)
        console.log("teamRev: "+a.reviews.length)
        
        this.revServ.getReviews().subscribe(b=>{
          this.reviwes=b;
          console.log("length: "+b.length);

          console.log("reviews: "+this.reviwes.length)
          console.log("teamRev: "+this.reviwes)

        for(var i = 0 ; i < this.reviwes.length; i++){
            console.log("len: "+this.reviwes.length);
            for(var y = 0 ; y < this.completed.length; y++){
              if(this.reviwes[i].projectId == this.completed[y]){
                this.anotherReviews.push(this.reviwes[i]);
              }
            }                 
        }  

        for(var i = 0 ; i < this.anotherReviews.length ; i++){
          for(var y = 0 ; y < this.team.deals.length; y++){
            if(this.anotherReviews[i].clientId == this.team.deals[y].clientId
              && this.anotherReviews[i].projectId == this.team.deals[y].projectId
              ){
                this.sAnother.push(this.anotherReviews[i]);
              }
          }
        }

        for(var x= 0 ; x < this.sAnother.length ; x++){
          for(var y = 0 ; y < this.completed.length ; y++){
            for(var z = 0 ; z < this.cClients.length ; z++){
              if(this.sAnother[x].projectId == this.completed[y] && this.sAnother[x].clientId == this.cClients[z]){
                console.log("yeees equaal");
                this.review.push(this.sAnother[x].content);
              }
            }
          }
        }

        for(var a = 0 ; a < this.cClients.length ; a++){
          for(var d = 0 ; d < this.accounts.length ; d++){

            if(this.cClients[a] == this.accounts[d].id){
              this.clientsNames.push(this.accounts[d].firstName+" "+this.accounts[d].lastName)
            }
          }
        }
        for(var c = 0 ; c < this.completed.length ; c++){
          for(var e = 0 ; e < this.projects.length ; e++){

            if(this.completed[c] == this.projects[e].id){
              this.projectsNames.push(this.projects[e].title);
            }
          }
        }

        for(var i = 0 ; i < this.clientsNames.length ; i++){
          console.log("this: "+this.clientsNames.length)
          this.projectsReviewsClients.push(new ProjectReviewClient(this.clientsNames[i],this.projectsNames[i],this.review[i],this.reviwes[i].rate));
        }

        for(var x = 0 ; x < this.inCompletedTitles.length ; x++){
            this.projectsClients.push(new ProjectClient(this.inCompletedTitles[x], this.iClientsNames[x]));
          }

        console.log("clientsNames: "+this.clientsNames);
        console.log("projectsNames: "+this.projectsNames);

        console.log("another: "+this.anotherReviews)
        console.log("another: "+this.sAnother)
        })
      
      })
    })
  }



}
