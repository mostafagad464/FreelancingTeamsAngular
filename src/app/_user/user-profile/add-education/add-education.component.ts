import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Education } from 'src/app/_models/education';
import { UserProfileService } from 'src/app/_services/user-profile.service';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css']
})
export class AddEducationComponent implements OnInit {
  freelancerIdArray:string[]=[];
  freelancerId:number=0;
  title:string[]=[];
  string:string="";
  freelancerEducation: Education = new Education(0, "", "", "", "", "", );
  constructor(public activeModal: NgbActiveModal,public UserSer:UserProfileService,
    public router:Router,public ac:ActivatedRoute) { }

  ngOnInit(): void {
    
    this.ac.params.subscribe(a => {
   
      this.freelancerIdArray=this.router.routerState.snapshot.url.split("/")

      this.freelancerId=Number(this.freelancerIdArray[2]) ;
      console.log( this.freelancerId)
  
  
     })

  }
  close(){

    this.activeModal.close();
  }
  Add() {

  
    this.freelancerEducation.freelancerId = this.freelancerId; 
   
    this.freelancerEducation.gradYear=Number( this.freelancerEducation.gradYear)
   


    this.UserSer.AddFreelancerEducation(this.freelancerEducation).subscribe(a => {
      console.log(" this.freelancerEducation")

      console.log( this.freelancerEducation)
   
  
    })
    this.activeModal.close();
  }
  



}
