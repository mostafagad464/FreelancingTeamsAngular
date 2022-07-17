import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Freelancer } from 'src/app/_models/freelancer';
import { Portoflio } from 'src/app/_models/portoflio';
import { AuthService } from 'src/app/_services/auth.service';
import { UserProfileService } from 'src/app/_services/user-profile.service';

@Component({
  selector: 'app-add-portfolio',
  templateUrl: './add-portfolio.component.html',
  styleUrls: ['./add-portfolio.component.css']
})
export class AddPortfolioComponent implements OnInit {
  freelancerId:any;
  close()
  {
    this.router.navigateByUrl("profile/"+this.freelancerId+"/portfolio/"+this.freelancerId)
    
    // this.activeModal.close();
    // console.log("closed")

  }
  save()
  {
    this.usrserv.addPortoflio(this.portfolio).subscribe(p=>{
      this.portfolioArray.push(p);
      console.log(p)});
      this.router.navigateByUrl("profile/"+this.freelancerId+"/portfolio/"+this.freelancerId)
   
    console.log(this.portfolio);
    console.log(this.portfolioArray);


  }
  portfolio:Portoflio=new Portoflio(0,"","","",0);
  portfolioArray:Portoflio[]=[]

  constructor(public authser:AuthService,public usrserv:UserProfileService, public router:Router) { }

  ngOnInit(): void {

    this.freelancerId=this.authser.getCurrentUser()?.id;
    this.portfolio.freelancerId=this.freelancerId;
  }

}
