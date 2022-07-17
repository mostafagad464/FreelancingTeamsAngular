import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Freelancer } from 'src/app/_models/freelancer';
import { User } from 'src/app/_models/user';
import { UserProfileService } from 'src/app/_services/user-profile.service';
import { EditpersonalInfoComponent } from '../editpersonal-info/editpersonal-info.component';
import { Account } from 'src/app/_models/account';
import { AuthService } from 'src/app/_services/auth.service';


@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {
  
  userId:any;
  profileId:any;
  openModal() {
    
    const modalRef = this.modalService.open(EditpersonalInfoComponent);
    modalRef.componentInstance.accountInfo=this.accountInfo;
    
    // this.router.navigateByUrl("editpersonalInfo/"+this.userId);
    // modalRef.result.then((result:any) => {
    //   console.log("this is result"+result);
    // }, (reason:any) => {
    // });
  }

  userInfo:User=new User(0,null,0,0,"","","",null,0,true,"",true,true,null,null,true,null,null,null,null,null)
  //userInfo={} as User;
  accountInfo:Account=new Account(0,0,"","","","","","",null);
  // accountInfo={} as Account
  sub1:Subscription|null=null
  sub2:Subscription|null=null
  sub3:Subscription|null=null

  constructor(public userserv:UserProfileService,public authserv:AuthService,public ar:ActivatedRoute,public modalService: NgbModal,public router:Router) { }

  ngOnInit(): void {
    this.userId=this.authserv.getCurrentUser()?.id;
    this.sub1=this.ar.params.subscribe(a=>{
      this.profileId=a['id']

      this.sub3=this.userserv.getUserInfoByid(a['id']).subscribe(u=>{
        this.userInfo=u;
        
      })

    this.sub2=this.userserv.getAccountInfoByid(a['id']).subscribe(b=>{
      if(b.type=="User")
      {

        this.accountInfo=b;
        

      }
      }

    )

  })
  }
}
