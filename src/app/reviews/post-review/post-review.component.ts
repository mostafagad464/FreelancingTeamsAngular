import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Review } from 'src/app/_models/review';
import { ReviewsService } from 'src/app/_services/reviews.service';

@Component({
  selector: 'app-post-review',
  templateUrl: './post-review.component.html',
  styleUrls: ['./post-review.component.css']
})
export class PostReviewComponent implements OnInit {

  rate=0;
  review:Review={
    clientId: 0,
    teamId:0,
    projectId:0,
    rate:0,
    content:"",
    date:new Date,
    fromClient:""
  }

  constructor(public revServ:ReviewsService, public ac:ActivatedRoute) { }

  Submit(){
    this.revServ.postReview(this.review).subscribe(a=>{
      console.log(this.review);
    })
  }

  ngOnInit(): void {
    this.ac.params.subscribe(a=>{
      // this.teamServ.getTeamById(a['id']).subscribe(a=>{
      //   this.team=a;
  })
}

}
