import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FreelancerExperience } from 'src/app/_models/freelancer-experience';
import { UserProfileService } from 'src/app/_services/user-profile.service';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.css']
})
export class AddExperienceComponent implements OnInit {

  freelancerIdArray:string[]=[];
  freelancerId:number=0;

  freelancerExperience: FreelancerExperience = new FreelancerExperience(0, "", "", "", "", "", "","");

  constructor(public activeModal: NgbActiveModal,public UserSer:UserProfileService,
    public router:Router,public ac:ActivatedRoute) { }

  ngOnInit(): void {
    this.ac.params.subscribe(a => {
      this.freelancerIdArray=this.router.routerState.snapshot.url.split("/")
    
      this.freelancerId=Number(this.freelancerIdArray[2]) ;
      console.log(this.freelancerId)
     
     })
  }
  close(){
    // this.ac.params.subscribe(a => {

    //   this.freelancerExperience.FreelancerId = a['id'];
    //   console.log(  this.freelancerExperience.FreelancerId )
     
    // })
    // console.log( this.freelancerExperience)
    // this.freelancerExperience.FreelancerId = this.freelancerId; 
    // this.UserSer.AddFreelancerExperience( this.freelancerExperience).subscribe(a => {

    //   console.log( this.freelancerExperience)
   
  
    // })
    this.activeModal.close();
  }
  Add() {

    this.ac.params.subscribe(a => {

      this.freelancerExperience.FreelancerId = a['id'];
      console.log(  this.freelancerExperience.FreelancerId )
     
    })
    console.log( this.freelancerExperience)
    this.freelancerExperience.FreelancerId = this.freelancerId; 
    this.UserSer.AddFreelancerExperience( this.freelancerExperience).subscribe(a => {

      console.log( this.freelancerExperience)
   
  
    })
    this.activeModal.close();
  }
  


}
