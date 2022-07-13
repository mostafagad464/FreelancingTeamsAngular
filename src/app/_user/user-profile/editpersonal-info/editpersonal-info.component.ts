import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { forkJoin, Subscription } from 'rxjs';
import { Account } from 'src/app/_models/account';
import { Freelancer } from 'src/app/_models/freelancer';
import { User } from 'src/app/_models/user';
import { AuthService } from 'src/app/_services/auth.service';
import { UserProfileService } from 'src/app/_services/user-profile.service';

@Component({
  selector: 'app-editpersonal-info',
  templateUrl: './editpersonal-info.component.html',
  styleUrls: ['./editpersonal-info.component.css']
})
export class EditpersonalInfoComponent implements OnInit {
  // @Input() public accountInfo:any; 
  accountInfo:Account=new Account(0,0,"","","","","","",
  new User(0,"",0,0,new Date().toISOString(),"","","",0,true,"",true,false,null,null,true,null,null,null,null,
  new Freelancer(0,true,0,0,0,null,new Date(),0,0,"",0,0,0,0,[],"")));
  sub1:Subscription|null=null
  sub2:Subscription|null=null
  sub3:Subscription|null=null
  sub4:Subscription|null=null
  userId:any;
  
  save(){
    
    forkJoin([this.userserv.updateAccount(this.accountInfo),
      this.userserv.updateUser(this.accountInfo.user!)]).subscribe(a=>console.log(a));
      this.close();
      // this.router.navigateByUrl("profile/"+this.userId+"/personalinfo/"+this.userId)
  // this.sub3=this.userserv.updateAccount(this.accountInfo).subscribe(a=>console.log(a));
  // this.sub4=this.userserv.updateUser(this.accountInfo.user).subscribe(u=>console.log(u))
  
  // 

  // console.log(this.accountInfo);
  // console.log("saved")
  }
  close(){
    this.activeModal.close();
    console.log("closed")
  }

  constructor(public userserv:UserProfileService,public ar:ActivatedRoute,public activeModal:NgbActiveModal,public router:Router,public authser:AuthService) { 
    this.userId=this.authser.getCurrentUser()?.id;
  }

  ngOnInit(): void {
    console.log(this.accountInfo)
    
    this.sub1=this.ar.params.subscribe(a=>{
      console.log(a)
      

  })
    
          
        
 

}
}
