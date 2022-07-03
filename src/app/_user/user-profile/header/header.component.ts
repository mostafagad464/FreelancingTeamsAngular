import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Account } from 'src/app/_models/Account';
import { Freelancer } from 'src/app/_models/freelancer';
import { User } from 'src/app/_models/user';
import { UserProfileService } from 'src/app/_services/user-profile.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  sub1:Subscription|null=null;
  sub2:Subscription|null=null;
  // userInfo:User=new User(0,new Date(),0,0,new Date(),"","","",0,true,"",true,false,0,0,true,new Freelancer(0,true,0,0,0,new Date(),0,0,"",0,0,0,0))
  //userInfo:User|null=null
  //userInfo = {} as User;
  accountInfo:Account=new Account(0,0,"","","","","","",new User(0,new Date(),0,0,new Date(),"","","",0,true,"",true,false,0,0,true,new Freelancer(0,true,0,0,0,new Date(),0,0,"",0,0,0,0)))

  //accountInfo ={} as Account;


  constructor(public userserv:UserProfileService,public ar:ActivatedRoute) {
    this.sub2=this.userserv.getAccountInfoByid(1).subscribe(a=>
      {this.accountInfo=a
      console.log(this.accountInfo.user.rate)
      })
   }

  ngOnInit(): void {

  }

}
