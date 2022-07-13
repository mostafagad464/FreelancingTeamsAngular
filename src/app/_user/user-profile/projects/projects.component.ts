import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Portoflio } from 'src/app/_models/portoflio';
import { UserProfileService } from 'src/app/_services/user-profile.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  clickMethod(id:number) {
    
    if(confirm("Are you sure to delete this project")) {
      this.userserv.deletePortoflio(id).subscribe(p=>{
        console.log(p)
      });

      console.log("Implement delete functionality here");
    }
  }
  sub1:Subscription|null=null;
  sub2:Subscription|null=null;
  portfolioArray:Portoflio[]=[]

  constructor(public userserv:UserProfileService ,public ar:ActivatedRoute ) { }

  ngOnInit(): void {
    this.sub1=this.ar.params.subscribe(x=>{
      this.sub2=this.userserv.getFreelancerPortfolio(x['id']).subscribe(a=>
        {
          this.portfolioArray=a;
        });

    })


  }

}
