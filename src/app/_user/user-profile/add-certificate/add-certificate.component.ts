import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FreelancerCertificates } from 'src/app/_models/freelancer-certificates';
import { UserProfileService } from 'src/app/_services/user-profile.service';

@Component({
  selector: 'app-add-certificate',
  templateUrl: './add-certificate.component.html',
  styleUrls: ['./add-certificate.component.css']
})
export class AddCertificateComponent implements OnInit {
  freelancerIdArray:string[]=[];
  freelancerId:number=0;
  title:string[]=[];
  string:string="";
  freelancerCertificate: FreelancerCertificates = new FreelancerCertificates(0, "", "", "", "", "", "");
  constructor(public activeModal: NgbActiveModal,public UserSer:UserProfileService,
  public router:Router,public ac:ActivatedRoute) { }
  
  ngOnInit(): void {

    this.ac.params.subscribe(a => {
      console.log(this.ac.snapshot);
      console.log(this.router.routerState.snapshot.url);
      this.freelancerIdArray=this.router.routerState.snapshot.url.split("/")
      console.log(this.freelancerId)
  
      console.log(this.freelancerIdArray[2]);
      this.freelancerId=Number(this.freelancerIdArray[2]) ;
      console.log(this.freelancerId);
      // console.log(this.freelancerId[5].split(')'));
      // this.title=this.freelancerId[5].split(')');
      // console.log(this.title[0]);
     
     })

  }
  close(){
    this.ac.params.subscribe(a => {

      this.freelancerCertificate.FreelancerId = a['id'];
      console.log( this.freelancerCertificate.FreelancerId )
     
    })
    console.log(this.freelancerCertificate)
    this.freelancerCertificate.FreelancerId = this.freelancerId; 
    this.UserSer.AddFreelancerCertificate(this.freelancerCertificate).subscribe(a => {

      console.log(this.freelancerCertificate)
   
  
    })
    this.activeModal.close();
  }
  Add() {

    this.ac.params.subscribe(a => {

      this.freelancerCertificate.FreelancerId = a['id'];
      console.log( this.freelancerCertificate.FreelancerId )
     
    })
    console.log(this.freelancerCertificate)
    this.freelancerCertificate.FreelancerId = 1; 
    this.UserSer.AddFreelancerCertificate(this.freelancerCertificate).subscribe(a => {

      console.log(this.freelancerCertificate)
   
  
    })
 

  }

}
