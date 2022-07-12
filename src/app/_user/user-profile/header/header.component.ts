import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Account } from 'src/app/_models/account';
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
  accountInfo:Account=new Account(0,0,"","","","","","",new User(0,"",0,0,new Date().toISOString(),"","","",0,true,"",true,false,null,null,true,null,null,null,null,new Freelancer(0,true,0,0,0,null,new Date(),0,0,"",0,0,0,0,[])));

  //accountInfo ={} as Account;


  constructor(public userserv:UserProfileService,public ar:ActivatedRoute) {
    this.sub1=this.ar.params.subscribe(x=>{
      this.sub2=this.userserv.getAccountInfoByid(x['id']).subscribe(a=>
        {this.accountInfo=a
        console.log(this.accountInfo.user?.rate)
        })
    })

   }

  ngOnInit(): void {

  }

}
