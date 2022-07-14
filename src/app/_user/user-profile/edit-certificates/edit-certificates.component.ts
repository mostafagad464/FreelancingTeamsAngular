import { Component, OnInit } from '@angular/core';
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
  date : string[] =[];

  freelancerCertificate: FreelancerCertificates = new FreelancerCertificates(0, "", "", "", "", "", "");

  constructor(public UserSer: UserProfileService, public router: Router, 
    public activeModal:NgbActiveModal,public ac: ActivatedRoute,public modalService: NgbModal) { }

  ngOnInit(): void {
    this.ac.params.subscribe(a => {
      this.freelancerId=this.router.routerState.snapshot.url.split("/")
  
      this.title=this.freelancerId[5].split(')');
      this.UserSer.GetCertificateById(this.freelancerId[4],this.title[0]).subscribe(a => {
     
      this.freelancerCertificate = a;
     
    
        this.date=this.freelancerCertificate.date.split("T")
       
        
        this.freelancerCertificate.date=this.date[0];
     

      })
     })
  
  }
  close(){
   
   this.activeModal.close();
  }



  edit() {
  
 
    this.UserSer.UpdateFreelancerCertificates(this.freelancerCertificate.freelancerId
      , this.freelancerCertificate).subscribe(a => {
   

      })

   this.activeModal.close();
  }

}
