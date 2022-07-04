import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Portoflio } from 'src/app/_models/portoflio';
import { UserProfileService } from 'src/app/_services/user-profile.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  sub1:Subscription|null=null;
  portfolioArray:Portoflio[]=[]

  constructor(public userserv:UserProfileService) { }

  ngOnInit(): void {
    this.sub1=this.userserv.getFreelancerPortfolio(1).subscribe(a=>
      {
        this.portfolioArray=a;
      });

  }

}
