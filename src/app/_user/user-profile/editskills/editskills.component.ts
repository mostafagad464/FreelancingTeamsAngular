import { Component, OnInit } from '@angular/core';
import { FreelancerHasSkill } from 'src/app/_models/freelancer-has-skill';
import { Skill } from 'src/app/_models/skill';

import { UserProfileService } from 'src/app/_services/user-profile.service';

@Component({
  selector: 'app-editskills',
  templateUrl: './editskills.component.html',
  styleUrls: ['./editskills.component.css']
})
export class EditskillsComponent implements OnInit {
  freelancerSkills:any[]=[];
  skills:any[]=[];
  freelancerNewSkill = new FreelancerHasSkill(1,0,0);

  constructor(public userSer : UserProfileService) { }
  
  ngOnInit(): void {
    this.userSer.getUserSkillsById(1).subscribe(a=>{
    this.freelancerSkills[1]=a;
    console.log(this.freelancerSkills[1])
    })

    this.userSer.getAllSkills().subscribe(a=>{
      this.skills[1]=a;
      console.log(this.skills)
      console.log(this.skills[1])

    })
  }

  Edit(id:number){

  }
  Delete(freelancerId:number,skillId:number){
    this.userSer.DeleteFreelancerSkill(freelancerId,skillId).subscribe(a=>{
      this.ngOnInit();
    });
  }
  Add(){
    this.userSer.AddFreelancerSkill(this.freelancerNewSkill).subscribe(a=>{
      this.ngOnInit();
    });

    
  }


}

