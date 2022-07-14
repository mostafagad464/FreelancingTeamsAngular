import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Education } from 'src/app/_models/education';
import { UserProfileService } from 'src/app/_services/user-profile.service';

@Component({
  selector: 'app-editeducational-info',
  templateUrl: './editeducational-info.component.html',
  styleUrls: ['./editeducational-info.component.css']
})
export class EditeducationalInfoComponent implements OnInit {
  freelancerEducations: any[] = [];
  freelancerId:string[]=[];
  gradYear:string[]=[];


  freelancerEducation: Education = new Education(0, "", "", "", "", "", );

  constructor(public activeModal: NgbActiveModal,public UserSer:UserProfileService,
    public router:Router,public ac:ActivatedRoute) { }

  ngOnInit(): void {

    this.ac.params.subscribe(a => {
      console.log(this.router.routerState.snapshot.url)
       
      this.freelancerId=this.router.routerState.snapshot.url.split("/")
     
      this.gradYear=this.freelancerId[7].split(")")
   
    
      this.UserSer.GetEducationById(this.freelancerId[2],this.gradYear[0]).subscribe(a => {
     
      this.freelancerEducation = a;
  
      })
     })

  }
  close(){

    this.activeModal.close();
  }
  edit() {
  
 
    this.UserSer.UpdateFreelancerEducation(this.freelancerId[2],this.freelancerEducation.gradYear
      , this.freelancerEducation).subscribe(a => {
   

      })

   this.activeModal.close();
  }

}
