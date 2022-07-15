import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Complain } from 'src/app/_models/complain';
import { AuthService } from 'src/app/_services/auth.service';
import { UserProfileService } from 'src/app/_services/user-profile.service';

@Component({
  selector: 'app-post-complains',
  templateUrl: './post-complains.component.html',
  styleUrls: ['./post-complains.component.css']
})
export class PostComplainsComponent implements OnInit {
  profileId:number=0;
  newComplain:Complain=new Complain("","",null,null,null)
  

  constructor(public UserSer:UserProfileService,
    public router:Router,public ac:ActivatedRoute,public authserv:AuthService) { }

  ngOnInit(): void {
    this.profileId=this.authserv.getCurrentUser()?.id;
    console.log(" this.profileId")
    console.log( this.profileId)
   

  }
  close(){


    this.router.navigate([''])
  }
  Add() {
    this.newComplain.complainingUserId=this.profileId;
    
    console.log( "this.newComplain");
    console.log( this.newComplain);
    this.newComplain.complainingUserId=this.profileId
    this.UserSer.postComplain(this.newComplain).subscribe()
    this.router.navigate([''])

  
  
  }

}
