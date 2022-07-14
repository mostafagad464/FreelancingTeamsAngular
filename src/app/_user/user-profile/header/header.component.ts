import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Account } from 'src/app/_models/account';
import { Freelancer } from 'src/app/_models/freelancer';
import { User } from 'src/app/_models/user';
import { AuthService } from 'src/app/_services/auth.service';
import { UserProfileService } from 'src/app/_services/user-profile.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  personalInfo(){
    this.router.navigateByUrl("profile/"+this.userId+"/personalInfo/"+this.userId)


  }
  portfolio(){
    this.router.navigateByUrl("profile/"+this.userId+"/portfolio/"+this.userId)

  }
  Experiences(){
    this.router.navigateByUrl("profile/"+this.userId+"/experiences/"+this.userId)

  }
  Certificates()
  {
    this.router.navigateByUrl("profile/"+this.userId+"/certificates/"+this.userId)

  }
  Educations()
  {
    this.router.navigateByUrl("profile/"+this.userId+"/educations/"+this.userId)


  }
  sub1:Subscription|null=null;
  sub2:Subscription|null=null;
  userId:any;
  // userInfo:User=new User(0,new Date(),0,0,new Date(),"","","",0,true,"",true,false,0,0,true,new Freelancer(0,true,0,0,0,new Date(),0,0,"",0,0,0,0))
  //userInfo:User|null=null
  //userInfo = {} as User;
  accountInfo:Account=new Account(0,0,"","","","","","",
  new User(0,"",0,0,new Date().toISOString(),"","","",0,true,"",true,false,null,null,true,null,null,null,null,
  new Freelancer(0,true,0,0,0,null,new Date(),0,0,"",0,0,0,0,[],"")));

  //accountInfo ={} as Account;


  constructor(public userserv:UserProfileService,public ar:ActivatedRoute,public authserv:AuthService,public router:Router) {
    this.sub1=this.ar.params.subscribe(x=>{
      console.log(x);
      this.sub2=this.userserv.getAccountInfoByid(x['id']).subscribe(a=>
        {this.accountInfo=a
        console.log(this.accountInfo.user?.rate)
        console.log(this.accountInfo.user?.freelancerNavigation?.specialization)
        })
    })

   }

  ngOnInit(): void {
    this.userId=this.authserv.getCurrentUser()?.id;

  }

}
