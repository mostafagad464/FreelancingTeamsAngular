import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin, Subscription } from 'rxjs';
import { Account } from 'src/app/_models/account';
import { User } from 'src/app/_models/user';
import { AuthService } from 'src/app/_services/auth.service';
import { UserProfileService } from 'src/app/_services/user-profile.service';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {
  accountInfo:Account=new Account(0,0,"","","","","","",new User(0,"",0,0,new Date().toISOString(),"","","",0,true,"",true,false,null,null,true,null,null,null,null,null));

  sub1:Subscription|null=null
  sub2:Subscription|null=null
  userId:any;
  
  save(){
    
    
  this.userserv.updateUser(this.accountInfo.user!).subscribe(a=>console.log(a))
  this.router.navigateByUrl("profile/"+this.userId)
     


  }
  close(){
    this.router.navigateByUrl("profile/"+this.userId)
    
  

  }

  constructor(public userserv:UserProfileService,public ar:ActivatedRoute,public router:Router,public authser:AuthService) { }

  ngOnInit(): void {
    this.userId=this.authser.getCurrentUser()?.id;
    
    this.sub1=this.ar.params.subscribe(a=>{
      this.userId=a['id']

    this.sub2=this.userserv.getAccountInfoByid(this.userId).subscribe(b=>{
      if(b.type=="User")
      {

        this.accountInfo=b;
        console.log(this.userId,this.accountInfo)
        console.log("account data:",this.accountInfo)
        

      }
      }
    )

  })
  }

}
