import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Wallet } from 'src/app/_models/wallet';
import { FreelancerService } from 'src/app/_services/freelancer.service';
import { TeamService } from 'src/app/_services/team.service';
import { UserProfileService } from 'src/app/_services/user-profile.service';
import { WalletService } from 'src/app/_services/wallet.service';

@Component({
  selector: 'app-userwallet',
  templateUrl: './userwallet.component.html',
  styleUrls: ['./userwallet.component.css']
})
export class UserwalletComponent implements OnInit {
  sub1:Subscription|null=null;
  sub2:Subscription|null=null;
  sub3:Subscription|null=null;
  wallet:any;


  constructor(public walletserv:WalletService,public ar:ActivatedRoute,public router:Router,public usrserv:UserProfileService,public teamserv:TeamService) { }

  ngOnInit(): void {
    this.sub1=this.ar.params.subscribe(a=>{
      if(this.router.url.split("/")[1]=="profile")
      {
        this.sub2=this.usrserv.getUserInfoByid(a['id']).subscribe(u=>{
          
          this.sub3=this.walletserv.getWallet(u.walletId!).subscribe(w=>{
            this.wallet=w
          })
        })

      }
      else if(this.router.url.split("/")[1]=="team")
      {
        this.sub2=this.teamserv.getTeam(a['id']).subscribe(t=>{
          
          this.sub3=this.walletserv.getWallet(t.walletId!).subscribe(w=>{
            this.wallet=w
          })
        })
      }

      
    })
    
  }

}
