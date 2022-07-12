import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Review } from 'src/app/_models/review';
import { ProjectService } from 'src/app/_services/project.service';

@Component({
  selector: 'app-show-review',
  templateUrl: './show-review.component.html',
  styleUrls: ['./show-review.component.css']
})
export class ShowReviewComponent implements OnInit {

  review:Review={
    clientId: 0,
    teamId:0,
    projectId:0,
    rate:0,
    content:"",
    date:new Date,
    fromClient:""
  }

  constructor(public ac:ActivatedRoute, public projServ:ProjectService) { }

  ngOnInit(): void {
    this.ac.params.subscribe(a=>{
      this.projServ.getProjectById(a['id']).subscribe(a=>{
        this.review=a.reviews;
      })
      })
   

}
}
