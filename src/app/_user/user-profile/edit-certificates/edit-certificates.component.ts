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
    public ac: ActivatedRoute,public modalService: NgbModal) { }

  ngOnInit(): void {
    this.ac.params.subscribe(a => {
      console.log(this.router.routerState.snapshot.url)
       
      this.freelancerId=this.router.routerState.snapshot.url.split("/")
      this.title=this.router.routerState.snapshot.url.split("/")
     
    
      this.UserSer.GetCertificateById(this.freelancerId[2],this.title[5]).subscribe(a => {
     
      this.freelancerCertificate = a;
     
    
        this.date=this.freelancerCertificate.date.split("T")
       
        
        this.freelancerCertificate.date=this.date[0];
        this.freelancerCertificate.freelancerId=Number( this.freelancerId[2])
     

      })
     })
  
  }
  close(){
    this.router.navigateByUrl("profile/"+this.freelancerId[2]+"/certificates/"+this.freelancerId[2])
   
   
  }



  edit() {
  
 
    this.UserSer.UpdateFreelancerCertificates(this.freelancerCertificate.freelancerId
      , this.freelancerCertificate).subscribe(a => {
   

      })
      this.router.navigateByUrl("profile/"+this.freelancerId[2]+"/certificates/"+this.freelancerId[2])

   
  }

}
