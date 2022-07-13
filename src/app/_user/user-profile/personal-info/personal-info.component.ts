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
  openModal() {
    
    const modalRef = this.modalService.open(EditpersonalInfoComponent);
    modalRef.componentInstance.accountInfo=this.accountInfo;
    this.userId=this.authserv.getCurrentUser()?.id;
    // this.router.navigateByUrl("editpersonalInfo/"+this.userId);
    // modalRef.result.then((result:any) => {
    //   console.log("this is result"+result);
    // }, (reason:any) => {
    // });
  }

  // userInfo:User=new User(0,new Date(),0,0,new Date(),"","","",0,true,"",true,false,0,0,true,new Freelancer(0,true,0,0,0,new Date(),0,0,"",0,0,0,0))
  //userInfo={} as User;
  accountInfo:Account=new Account(0,0,"","","","","","",
  new User(0,"",0,0,new Date().toISOString(),"","","",0,true,"",true,false,null,null,true,null,null,null,null,
  new Freelancer(0,true,0,0,0,null,new Date(),0,0,"",0,0,0,0,[],"")));
  // accountInfo={} as Account
  sub1:Subscription|null=null
  sub2:Subscription|null=null

  constructor(public userserv:UserProfileService,public authserv:AuthService,public ar:ActivatedRoute,public modalService: NgbModal,public router:Router) { }

  ngOnInit(): void {
    this.sub1=this.ar.params.subscribe(a=>{
      console.log(a['id']);

    this.sub2=this.userserv.getAccountInfoByid(a['id']).subscribe(b=>{
      if(b.type=="User")
      {

        this.accountInfo=b;
        // console.log(this.accountInfo)
        if(b.user?.freelancer==true)
        {
          // console.log(b.user.freelancerNavigation)
        }
        

      }
      }
    )

  })
  }
}
