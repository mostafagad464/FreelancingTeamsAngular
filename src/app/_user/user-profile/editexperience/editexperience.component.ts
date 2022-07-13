import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FreelancerExperience } from 'src/app/_models/freelancer-experience';
import { UserProfileService } from 'src/app/_services/user-profile.service';

@Component({
  selector: 'app-editexperience',
  
  templateUrl: './editexperience.component.html',
  styleUrls: ['./editexperience.component.css'],
  
})
export class EditexperienceComponent implements OnInit {
  freelancerExperiences: any[] = [];
  freelancerId:string[]=[];
  Date:string[]=[];
  string:string="";
  date:Date=new Date() 
  startdate: string[]=[]
  enddate: string[]=[]
  currentlyWorkingCheck : Number=0;

  freelancerExperience: FreelancerExperience = new FreelancerExperience(0, "", "", "", "", "", "","");

  constructor(public UserSer: UserProfileService, public router: Router, 
    public activeModal:NgbActiveModal,public ac: ActivatedRoute,public modalService: NgbModal) { }
  ngOnInit(): void {
    this.ac.params.subscribe(a => {
     
      this.freelancerId=this.router.routerState.snapshot.url.split("/")
   
      this.Date=this.freelancerId[5].split(')');

      this.UserSer.GetExperienceById(this.freelancerId[4],this.Date[0]).subscribe(a => {
       console.log("obj",a)
       this.freelancerExperience= a;
       this.startdate=this.freelancerExperience.startDate.split("T");
       this.enddate=this.freelancerExperience.endDate.split("T");
       this.freelancerExperience.startDate=this.startdate[0];
       this.freelancerExperience.endDate=this.enddate[0]

       console.log(this.freelancerExperience.curentllyWorking)    

      })
     })

  }
  close(){
  
   this.activeModal.close();
    }


  Edit() {
    if(this.currentlyWorkingCheck ==1){
      this.freelancerExperience.curentllyWorking=true;

    }else{
      this.freelancerExperience.curentllyWorking=false;
    }
  
        this.UserSer.UpdateFreelancerExperiences(this.freelancerExperience.freelancerId
          ,this.freelancerExperience.startDate
          , this.freelancerExperience).subscribe(a => {
            console.log(a)
    
          })
        

    this.activeModal.close();
  }


}