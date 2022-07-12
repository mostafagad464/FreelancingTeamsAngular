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
  date:Date=new Date() ;
  freelancerExperience: FreelancerExperience = new FreelancerExperience(0, "", "", "", "", "", "","");

  constructor(public UserSer: UserProfileService, public router: Router, 
    public activeModal:NgbActiveModal,public ac: ActivatedRoute,public modalService: NgbModal) { }
  ngOnInit(): void {
    this.ac.params.subscribe(a => {
      console.log(this.ac.snapshot);
      console.log(this.router.routerState.snapshot.url);
      this.freelancerId=this.router.routerState.snapshot.url.split("/")
      console.log(this.freelancerId[4]);
      
      console.log(this.freelancerId[5].split(')'));
      this.Date=this.freelancerId[5].split(')');
      console.log(this.Date[0]);
          
      this.UserSer.GetExperienceById(this.freelancerId[4],this.Date[0]).subscribe(a => {
      console.log("obj",a)
         
        this.freelancerExperiences[1] = a;
       this.date= this.freelancerExperiences[1].startDate
       console.log(this.date)
        // console.log(this.freelancerCertificates[1].freelancerId)

      })
     })



    // this.ac.params.subscribe(a => {
    //   this.UserSer.GetAllFreelancerExperiences(a['id']).subscribe(a => {
    //     this.freelancerExperiences[1] = a;
    //     console.log(a)

    //   })

    // })
  }
  close(){
    // console.log("there")
    // console.log(this.freelancerExperiences[1].freelancerId)
    // this.UserSer.GetAllFreelancerExperiences(this.freelancerExperiences[1].freelancerId).subscribe(a=>{
    //  console.log("a",a)
    //  this.freelancerExperiences[2]=a;
    //  for(let i=0; this.freelancerExperiences[2].length;i++){
      
    //   if(this.freelancerExperiences[1].startDate != this.freelancerExperiences[2].startDate){
    //     this.UserSer.UpdateFreelancerExperiences(this.freelancerExperiences[1].freelancerId
    //       ,this.freelancerExperiences[1].StartDate
    //       , this.freelancerExperiences[1]).subscribe(a => {
    //         console.log(a)
    
    //       })
        
    //   }
    //  }

    // })
    
   this.activeModal.close();
    }

  // }
  // Delete(freelancerId: number, startDate: Date) {
  //   this.UserSer.DeleteFreelancerExperience(freelancerId, startDate).subscribe(a => {
  //     this.ngOnInit()
  //   })
  // }
  // Add() {

  //   this.ac.params.subscribe(a => {
  //     this.freelancerExperience.FreelancerId = a['id'];
  //   })

  //   this.UserSer.AddFreelancerExperience(this.freelancerExperience).subscribe(a => {

  //     console.log(this.freelancerExperience)
 
  //     this.ngOnInit()
  //   })

  // }

  Edit() {
    console.log("there")
    console.log(this.freelancerExperiences[1].freelancerId)
    this.UserSer.GetAllFreelancerExperiences(this.freelancerExperiences[1].freelancerId).subscribe(a=>{
     console.log("a",a)
     this.freelancerExperiences[2]=a;
     for(let i=0; this.freelancerExperiences[2].length;i++){
      
      if(this.freelancerExperiences[1].startDate != this.freelancerExperiences[2].startDate){
        this.UserSer.UpdateFreelancerExperiences(this.freelancerExperiences[1].freelancerId
          ,this.freelancerExperiences[1].StartDate
          , this.freelancerExperiences[1]).subscribe(a => {
            console.log(a)
    
          })
        
      }
     }

    })
    this.activeModal.close();
  }


}