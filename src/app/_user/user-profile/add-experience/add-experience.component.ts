import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FreelancerExperience } from 'src/app/_models/freelancer-experience';
import { AuthService } from 'src/app/_services/auth.service';
import { UserProfileService } from 'src/app/_services/user-profile.service';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.css']
})
export class AddExperienceComponent implements OnInit {

  freelancerIdArray:string[]=[];
  freelancerId:number=0;
  currentlyworking : Number=0;

  freelancerExperience: FreelancerExperience = new FreelancerExperience(0, "", "", "", "", "", "","");

  constructor(public UserSer:UserProfileService,public authServ : AuthService,
    public router:Router,public ac:ActivatedRoute) { }

  ngOnInit(): void {
   
    this.freelancerId=this.authServ.getCurrentUser()?.id;
  }
  close(){
    this.router.navigateByUrl("profile/"+this.freelancerId+"/experiences/"+this.freelancerId)
   
  }
  Add() {

  
   

    this.freelancerExperience.freelancerId = this.freelancerId; 
    if(this.currentlyworking==1){
      this.freelancerExperience.curentllyWorking=true;

    }else{
      this.freelancerExperience.curentllyWorking=false;
    }
    this.UserSer.AddFreelancerExperience( this.freelancerExperience).subscribe(a => {

      console.log( this.freelancerExperience)
   
  
    })
    this.router.navigateByUrl("profile/"+this.freelancerId+"/experiences/"+this.freelancerId)

  }
  


}
