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
   
      this.freelancerIdArray=this.router.routerState.snapshot.url.split("/")

      this.freelancerId=Number(this.freelancerIdArray[2]) ;
  
  
     })

  }
  close(){
   
    this.activeModal.close();
  }
  Add() {

    this.ac.params.subscribe(a => {

      this.freelancerCertificate.freelancerId = a['id'];
      console.log( this.freelancerCertificate.freelancerId )
     
    })
    console.log(this.freelancerCertificate)
    this.freelancerCertificate.freelancerId = 1; 
    this.UserSer.AddFreelancerCertificate(this.freelancerCertificate).subscribe(a => {

      console.log(this.freelancerCertificate)
   
  
    })
    this.activeModal.close();
 

  }

}
