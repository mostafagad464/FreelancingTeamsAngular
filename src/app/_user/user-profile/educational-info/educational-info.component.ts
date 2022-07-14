import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Education } from 'src/app/_models/education';
import { UserProfileService } from 'src/app/_services/user-profile.service';
import { AddEducationComponent } from '../add-education/add-education.component';
import { EditeducationalInfoComponent } from '../editeducational-info/editeducational-info.component';

@Component({
  selector: 'app-educational-info',
  templateUrl: './educational-info.component.html',
  styleUrls: ['./educational-info.component.css']
})
export class EducationalInfoComponent implements OnInit {

  freelancerEducation:any[]=[];
  constructor(public router:Router,public UserSer:UserProfileService,public ac:ActivatedRoute,public modalService: NgbModal) { }

  ngOnInit(): void {
    this.ac.params.subscribe(a=>{
     this.UserSer.GetAllFreelancerEducation(a['id']).subscribe(a=>{
       this.freelancerEducation[1]=a;
 
       console.log(this.freelancerEducation[1]=a)
     })
 
    })
     
 
   }
   openModalAdd() {
     const modalRef = this.modalService.open(AddEducationComponent,
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
     const modalRef = this.modalService.open(EditeducationalInfoComponent,
   
       {
         scrollable: true,
         windowClass: 'myCustomModalClass',
       });
 
     modalRef.result.then((result:any) => {
       console.log(result);
     }, (reason:any) => {
     });
   }
   Delete(freelancerId: number, gradYear: number) {
    console.log("freelancerId,gradYear")
     console.log(freelancerId,gradYear)
     this.UserSer.DeleteFreelancerEducation(freelancerId,gradYear).subscribe(a => {
        this.ngOnInit()
     })
 
   }
 }
 