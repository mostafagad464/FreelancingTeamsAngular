import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserProfileService } from 'src/app/_services/user-profile.service';
import { AddExperienceComponent } from '../add-experience/add-experience.component';
import { EditexperienceComponent } from '../editexperience/editexperience.component';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  freelancerExperiences:any[]=[];

  constructor(public router:Router,public userSer:UserProfileService,public ac:ActivatedRoute,public modalService: NgbModal) { 

  }

  ngOnInit(): void {

    this.ac.params.subscribe(a => {
      this.userSer.GetAllFreelancerExperiences(a['id']).subscribe(a => {
        this.freelancerExperiences[1]=a;

        console.log(this.freelancerExperiences[1])

      })



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


