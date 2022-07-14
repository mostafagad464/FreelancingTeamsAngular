import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserProfileService } from 'src/app/_services/user-profile.service';
import { AddCertificateComponent } from '../add-certificate/add-certificate.component';
import { EditCertificatesComponent } from '../edit-certificates/edit-certificates.component';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {

  freelancerCertificates:any[]=[];

  profileId:Number=0;
  userId:Number=0;
  sub1:Subscription|null=null;

  constructor(public router:Router,public UserSer:UserProfileService,public ac:ActivatedRoute,
    public modalService: NgbModal,
    public authServ:AuthService) { }

  ngOnInit(): void {
   this.ac.params.subscribe(a=>{
    this.UserSer.GetAllFreelancerCertificates(a['id']).subscribe(a=>{
      this.freelancerCertificates[1]=a;

      console.log(this.freelancerCertificates[1])
    })

   })
   this.profileId=this.authServ.getCurrentUser()?.id;
    this.sub1=this.ac.params.subscribe(x=>{
      this.userId=x['id'];
    })
    

  }
  openModalAdd() {
    const modalRef = this.modalService.open(AddCertificateComponent,
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
    const modalRef = this.modalService.open(EditCertificatesComponent,
  
      {
        scrollable: true,
        windowClass: 'myCustomModalClass',
      });

    modalRef.result.then((result:any) => {
      console.log(result);
    }, (reason:any) => {
    });
  }
  Delete(freelancerId: number, title: string) {
    console.log(freelancerId,title)
    this.UserSer.DeleteFreelancerCertificate(freelancerId, title).subscribe(a => {
       this.ngOnInit()
    })

  }
}
