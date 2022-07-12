import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Review } from 'src/app/_models/review';
import { Team } from 'src/app/_models/team';
import { ReviewsService } from 'src/app/_services/reviews.service';
import { TeamProfileService } from '../team-profile.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviwes:Review[]=[

  ]

  review:string[]=[

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


  constructor(public ac:ActivatedRoute, 
              public teamServ:TeamProfileService,
              public reviewServ:ReviewsService) { }

  ngOnInit(): void {
    this.ac.params.subscribe(a=>{
      this.teamServ.getTeamById(a['id']).subscribe(a=>{
        this.team=a;
        console.log(a.reviews);

        this.reviewServ.getReviews().subscribe(a=>{
          this.reviwes=a;

          for(var i = 0 ; i < this.reviwes.length; i++){
            if(this.reviwes[i].teamId==this.team.id){
              this.review.push(this.reviwes[i].content);
            }
          }
          console.log("rev:"+this.review)
        })
      
      })
    })
  }

}
