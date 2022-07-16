import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FreelancerCertificates } from 'src/app/_models/freelancer-certificates';
import { AuthService } from 'src/app/_services/auth.service';
import { UserProfileService } from 'src/app/_services/user-profile.service';

@Component({
  selector: 'app-add-certificate',
  templateUrl: './add-certificate.component.html',
  styleUrls: ['./add-certificate.component.css']
})
export class AddCertificateComponent implements OnInit {
  
 
  freelancerId:number=0;
  title:string[]=[];
  string:string="";
  freelancerCertificate: FreelancerCertificates = new FreelancerCertificates(0, "", "", "", "", "", "");
  constructor(public UserSer:UserProfileService,
  public router:Router,public ac:ActivatedRoute, public authServ: AuthService) { }
  
  ngOnInit(): void {

    this.freelancerId=this.authServ.getCurrentUser()?.id;
    

  }
  close(){
   
    this.router.navigateByUrl("profile/"+this.freelancerId+"/certificates/"+this.freelancerId)
  }
  Add() {

  
  
   this.freelancerCertificate.freelancerId = this.freelancerId; 

    this.UserSer.AddFreelancerCertificate(this.freelancerCertificate).subscribe(a => {

      console.log(this.freelancerCertificate)
   
  
    })
    this.router.navigateByUrl("profile/"+this.freelancerId+"/certificates/"+this.freelancerId)
 

  }

}
