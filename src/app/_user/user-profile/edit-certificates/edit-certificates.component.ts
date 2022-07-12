import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FreelancerCertificates } from 'src/app/_models/freelancer-certificates';
import { UserProfileService } from 'src/app/_services/user-profile.service';

@Component({
  selector: 'app-edit-certificates',
  templateUrl: './edit-certificates.component.html',
  styleUrls: ['./edit-certificates.component.css']
})
export class EditCertificatesComponent implements OnInit {
  freelancerCertificates: any[] = [];
  freelancerId:string[]=[];
  title:string[]=[];
  string:string="";

  freelancerCertificate: FreelancerCertificates = new FreelancerCertificates(0, "", "", "", "", "", "");

  constructor(public UserSer: UserProfileService, public router: Router, 
    public activeModal:NgbActiveModal,public ac: ActivatedRoute,public modalService: NgbModal) { }

  ngOnInit(): void {
    this.ac.params.subscribe(a => {
      console.log(this.ac.snapshot);
      console.log(this.router.routerState.snapshot.url);
      this.freelancerId=this.router.routerState.snapshot.url.split("/")
      console.log(this.freelancerId[4]);
      
      console.log(this.freelancerId[5].split(')'));
      this.title=this.freelancerId[5].split(')');
      console.log(this.title[0]);
      
      this.UserSer.GetCertificateById(this.freelancerId[4],this.title[0]).subscribe(a => {
        // this.freelancerCertificate=a
        // console.log(this.freelancerCertificate.FreelancerId)
        this.freelancerCertificates[1] = a;
        
        
        console.log(this.freelancerCertificates[1].freelancerId)

      })
     })
  
  }
  close(){
    // console.log("there")
    // console.log(this.freelancerCertificates[1].freelancerId)
    // this.UserSer.UpdateFreelancerCertificates(this.freelancerCertificates[1].freelancerId
    //   , this.freelancerCertificates[1]).subscribe(a => {
    //     console.log(a)

    //   })
   this.activeModal.close();
  }
  // Delete(freelancerId: number, title: string) {
  //   this.UserSer.DeleteFreelancerCertificate(freelancerId, title).subscribe(a => {
  //     this.ngOnInit()
  //   })



  // }
  // Add() {

  //   this.ac.params.subscribe(a => {

  //     this.freelancerCertificate.FreelancerId = a['id'];
  //   })

  //   this.UserSer.AddFreelancerCertificate(this.freelancerCertificate).subscribe(a => {

  //     console.log(this.freelancerCertificate)
  //     this.addExtra = false;
  //     this.ngOnInit()
  //   })

  // }

  edit() {
  
      console.log("there")
    console.log(this.freelancerCertificates[1].freelancerId)
    this.UserSer.UpdateFreelancerCertificates(this.freelancerCertificates[1].freelancerId
      , this.freelancerCertificates[1]).subscribe(a => {
        console.log(a)

      })

   this.activeModal.close();
  }

}
