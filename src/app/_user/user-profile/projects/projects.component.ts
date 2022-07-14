import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Portoflio } from 'src/app/_models/portoflio';
import { AuthService } from 'src/app/_services/auth.service';
import { UserProfileService } from 'src/app/_services/user-profile.service';
import { AddPortfolioComponent } from '../add-portfolio/add-portfolio.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  userId:any;
  profileId:any;
  openModal() {
    
    const modalRef = this.modalService.open(AddPortfolioComponent);
    modalRef.componentInstance.portfolioArray=this.portfolioArray;
  }
  clickMethod(id:number) {
    
    if(confirm("Are you sure to delete this project")) {
      this.userserv.deletePortoflio(id).subscribe(p=>{
        console.log(p);
        var deletedPortoflio=this.portfolioArray.find(a=>a.id==id);
        this.portfolioArray=this.portfolioArray.filter(p=>p!=deletedPortoflio)
      });

      console.log("Implement delete functionality here");
    }
  }
  sub1:Subscription|null=null;
  sub2:Subscription|null=null;
  portfolioArray:Portoflio[]=[]

  constructor(public userserv:UserProfileService ,public ar:ActivatedRoute,public modalService: NgbModal,public authserv:AuthService ) { }

  ngOnInit(): void {
    this.profileId=this.authserv.getCurrentUser()?.id;
    this.sub1=this.ar.params.subscribe(x=>{
      this.userId=x['id']
      this.sub2=this.userserv.getFreelancerPortfolio(x['id']).subscribe(a=>
        {
          this.portfolioArray=a;
        });

    })


  }

}
