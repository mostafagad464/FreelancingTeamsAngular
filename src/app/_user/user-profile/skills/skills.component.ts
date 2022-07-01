import { Component, OnInit } from '@angular/core';
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
  constructor(public userSer:UserProfileService) { 

  }
  ngOnInit(): void {
    this.userSer.getUserSkillsById(1).subscribe(a=>{
    this.freelancerSkills[1]=a;
    for(let i=0; i<this.freelancerSkills[1].length;i++){
      console.log(this.freelancerSkills[1][i].efficiancyRate)
      this.freelancerSkills[1][i].efficiancyRate = (this.freelancerSkills[1][i].efficiancyRate/5)*100;
    }
      
    });
  
    
  }




}
