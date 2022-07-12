import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Account } from 'src/app/_models/Account';
import { Freelancer } from 'src/app/_models/freelancer';
import { User } from 'src/app/_models/user';
import { UserProfileService } from 'src/app/_services/user-profile.service';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EditpersonalInfoComponent } from '../editpersonal-info/editpersonal-info.component';


@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {
  openModal() {
    const modalRef = this.modalService.open(EditpersonalInfoComponent);
    modalRef.componentInstance.accountInfo=this.accountInfo;
    // modalRef.result.then((result:any) => {
    //   console.log("this is result"+result);
    // }, (reason:any) => {
    // });
  }

  // userInfo:User=new User(0,new Date(),0,0,new Date(),"","","",0,true,"",true,false,0,0,true,new Freelancer(0,true,0,0,0,new Date(),0,0,"",0,0,0,0))
  //userInfo={} as User;
  accountInfo:Account=new Account(0,0,"","","","","","",new User(0,new Date(),0,0,new Date(),"","","",0,true,"",true,false,0,0,true,new Freelancer(0,true,0,0,0,new Date(),0,0,"",0,0,0,0)))
  // accountInfo={} as Account
  sub1:Subscription|null=null
  sub2:Subscription|null=null

  constructor(public userserv:UserProfileService,public ar:ActivatedRoute,public modalService: NgbModal,public router:Router) { }
  open()
  {

  }
  ngOnInit(): void {
    this.router.navigate([{ outlets: { modal: 'route' }}])
    this.sub1=this.ar.params.subscribe(a=>{
      console.log(a['id']);

    this.sub2=this.userserv.getAccountInfoByid(a['id']).subscribe(b=>{
      if(b.type=="User")
      {

        this.accountInfo=b;
        // console.log(this.accountInfo)
        if(b.user.freelancer==true)
        {
          // console.log(b.user.freelancerNavigation)
        }
        

      }
      }
    )

  })
  }
}
