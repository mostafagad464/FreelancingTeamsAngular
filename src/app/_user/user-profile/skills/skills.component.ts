import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FreelancerHasSkill } from 'src/app/_models/freelancer-has-skill';
import { User } from 'src/app/_models/user';
import { UserProfileService } from 'src/app/_services/user-profile.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  freelancerSkills:any[]=[];
  sub1:Subscription|null=null;
  constructor(public userSer:UserProfileService, public ac:ActivatedRoute) { 

  }
  ngOnInit(): void {
    this.ac.params.subscribe(a=>{

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
