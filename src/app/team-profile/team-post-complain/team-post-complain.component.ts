import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Complain } from 'src/app/_models/complain';
import { AuthService } from 'src/app/_services/auth.service';
import { UserProfileService } from 'src/app/_services/user-profile.service';

@Component({
  selector: 'app-team-post-complain',
  templateUrl: './team-post-complain.component.html',
  styleUrls: ['./team-post-complain.component.css']
})
export class TeamPostComplainComponent implements OnInit {
  profileId:number=0;
  newComplain:Complain=new Complain("","",null,null,null)
  

  constructor(public UserSer:UserProfileService,
    public router:Router,public ac:ActivatedRoute,public authserv:AuthService) { }

  ngOnInit(): void {
    this.ac.params.subscribe(a=>{
      this.profileId=a['id'];

    })
  }
  close(){


    this.router.navigate(['/teamProfile/',this.profileId])
  }
  Add() {
    this.newComplain.complainingTeamId=this.profileId;
    
    console.log( "this.newComplain");
    console.log( this.newComplain);
   
    this.UserSer.postComplain(this.newComplain).subscribe()
    this.router.navigate(['/teamProfile/',this.profileId])

  
  
  }

}
