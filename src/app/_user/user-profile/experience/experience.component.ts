import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/_services/auth.service';
import { UserProfileService } from 'src/app/_services/user-profile.service';
import { AddExperienceComponent } from '../add-experience/add-experience.component';
import { EditexperienceComponent } from '../editexperience/editexperience.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  profileId:Number=0;
  userId:Number=0;
  sub1:Subscription|null=null;

  freelancerExperiences:any[]=[];

  constructor(public router:Router,public userSer:UserProfileService
    ,public ac:ActivatedRoute,public modalService: NgbModal,
    public authServ:AuthService) { 

  }

  ngOnInit(): void {

    this.ac.params.subscribe(a => {
      this.userSer.GetAllFreelancerExperiences(a['id']).subscribe(a => {
        this.freelancerExperiences[1]=a;
        console.log("this.freelancerExperiences[1]")

        console.log(this.freelancerExperiences[1])

      })



    })
    this.profileId=this.authServ.getCurrentUser()?.id;
    this.sub1=this.ac.params.subscribe(x=>{
      this.userId=x['id'];
      console.log("this.userId")
      console.log(this.userId)
      console.log("this.profileId")
      console.log(this.profileId)


    })
    

  }

  openModalAdd() {
    const modalRef = this.modalService.open(AddExperienceComponent,
      {
        scrollable: true,
        windowClass: 'myCustomModalClass',
      });
      
    modalRef.result.then((result:any) => {
      console.log(result);
    }, (reason:any) => {
    });
  }
  openModalEdit() {
    const modalRef = this.modalService.open(EditexperienceComponent,
  
      {
        scrollable: true,
        windowClass: 'myCustomModalClass',
      });
  
    modalRef.result.then((result:any) => {
      console.log(result);
    }, (reason:any) => {
    });
  }
  Delete(freelancerId: number, StartDate: Date) {
    console.log(freelancerId,StartDate)
    this.userSer.DeleteFreelancerExperience(freelancerId, StartDate).subscribe(a => {
       this.ngOnInit()
    })

  }
}


