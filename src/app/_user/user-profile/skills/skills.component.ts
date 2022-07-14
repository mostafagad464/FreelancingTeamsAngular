import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/_services/auth.service';
import { UserProfileService } from 'src/app/_services/user-profile.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  userId:any;
  profileId:any;
  freelancerSkills:any[]=[];
  sub1:Subscription|null=null;
  constructor(public userSer:UserProfileService, public ac:ActivatedRoute,public authserv:AuthService) { 

  }
  ngOnInit(): void {
    this.profileId=this.authserv.getCurrentUser()?.id;
    this.ac.params.subscribe(a=>{
      this.userId=a['id']

      console.log(a['id']);
      this.userSer.getUserSkillsById(a['id']).subscribe(a=>{
        console.log("",this.freelancerSkills)
        this.freelancerSkills[1]=a;
        for(let i=0; i<this.freelancerSkills[1].length;i++){
          console.log(this.freelancerSkills[1][i].efficiancyRate)
          this.freelancerSkills[1][i].efficiancyRate = (this.freelancerSkills[1][i].efficiancyRate/5)*100;
        }
          
        });

    }
    )

  

    
    
  
    
  }




}
