import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Freelancer } from 'src/app/_models/freelancer';
import { User } from 'src/app/_models/user';
import { FreelancerService } from 'src/app/_services/freelancer.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  freelancers:User[]=[];
  sub1:Subscription|null=null;

  constructor(public freeserv:FreelancerService) { }

  ngOnInit(): void {
    this.sub1=this.freeserv.getFreelancers().subscribe(f=>{
      console.log(f)
      
    })


  }

}
