import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Education } from 'src/app/_models/education';
import { AuthService } from 'src/app/_services/auth.service';
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
  constructor(public UserSer:UserProfileService,
    public router:Router,public ac:ActivatedRoute, public authServ:AuthService) { }

  ngOnInit(): void {
    
    
  
      this.freelancerId=this.authServ.getCurrentUser()?.id;
  

  }
  close(){
    this.router.navigateByUrl("profile/"+this.freelancerId+"/educations/"+this.freelancerId)

   
  }
  Add() {

  
    this.freelancerEducation.freelancerId = this.freelancerId; 
   
    this.freelancerEducation.gradYear=Number( this.freelancerEducation.gradYear)
    console.log( "this.freelancerEducation")
   
    console.log( this.freelancerEducation)
   
   


    this.UserSer.AddFreelancerEducation(this.freelancerEducation).subscribe(a => {
      console.log(" this.freelancerEducation")

      console.log( this.freelancerEducation)
   
  
    })
    this.router.navigateByUrl("profile/"+this.freelancerId+"/educations/"+this.freelancerId)
   
  }
  



}
