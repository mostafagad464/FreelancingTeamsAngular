import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Review } from 'src/app/_models/review';
import { ReviewsService } from 'src/app/_services/reviews.service';
import { UserService } from 'src/app/_services/user.service';

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

  date1 = new Date;
  currentYear =this.date1.getUTCFullYear();
  currentMonth = this.date1.getUTCMonth()+1;
  currentDay = this.date1.getUTCDate();

  todayDate="";

  finalMonth : any;
  finalDay : any;

  constructor(public revServ:ReviewsService, public ac:ActivatedRoute, public userServ:UserService) { }

  Submit(){
    console.log(this.review);
    this.revServ.postReview(this.review).subscribe(a=>{
      console.log(this.review);
      alert("Thanks for your review!")
    })
  }

  ngOnInit(): void {

    if(this.currentMonth < 10){
      this.finalMonth = "0" + this.currentMonth;
    } else {
      this.finalMonth = this.currentMonth;
    }

    if(this.currentDay < 10){
      this.finalDay = "0" + this.currentDay;
    } else {
      this.finalDay = this.currentDay;
    }

    
    this.todayDate = this.currentYear + "-" + this.finalMonth + "-" + this.finalDay;
    this.review.date = new Date(this.todayDate) ;

    
    this.ac.params.subscribe(a=>{
      this.review.clientId= parseInt(a['clientId']);
      this.review.teamId= parseInt( a['teamId']);
      this.review.projectId= parseInt( a['projectId']);
      console.log(this.review);
    })

    this.userServ.getUser(this.review.clientId).subscribe(a => {
      if(a.client){
        this.review.fromClient = "C";
      } else {
        this.review.fromClient = "T";
      }
    })
}

}
