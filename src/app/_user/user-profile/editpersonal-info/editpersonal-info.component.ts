import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Account } from 'src/app/_models/Account';
import { Freelancer } from 'src/app/_models/freelancer';
import { User } from 'src/app/_models/user';
import { UserProfileService } from 'src/app/_services/user-profile.service';

@Component({
  selector: 'app-editpersonal-info',
  templateUrl: './editpersonal-info.component.html',
  styleUrls: ['./editpersonal-info.component.css']
})
export class EditpersonalInfoComponent implements OnInit {
  accountInfo:Account=new Account(0,0,"","","","","","",new User(0,new Date(),0,0,new Date(),"","","",0,true,"",true,false,0,0,true,new Freelancer(0,true,0,0,0,new Date(),0,0,"",0,0,0,0)))
  sub1:Subscription|null=null
  sub2:Subscription|null=null
  sub3:Subscription|null=null
  
  close(){
    this.activeModal.close();
  }
  save(){
    this.sub3=this.userserv.updateAccount(this.accountInfo).subscribe(a=>console.log(a))
  }

  constructor(public activeModal: NgbActiveModal,public userserv:UserProfileService,public ar:ActivatedRoute) { }

  ngOnInit(): void {
    
    this.sub1=this.ar.params.subscribe(a=>{
      console.log(a['id']);

    this.sub2=this.userserv.getAccountInfoByid(1).subscribe(b=>{
      if(b.type=="User")
      {

        this.accountInfo=b;
        console.log(this.accountInfo)
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
