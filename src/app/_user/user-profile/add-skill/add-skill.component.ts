import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FreelancerHasSkill } from 'src/app/_models/freelancer-has-skill';
import { Skill } from 'src/app/_models/skill';
import { AuthService } from 'src/app/_services/auth.service';
import { UserProfileService } from 'src/app/_services/user-profile.service';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {
  freelancerIdArray:string[]=[];
  skills:any[]=[];
  skillId:Number=0;
  freelancerId:Number=0
  freelancerNewSkill : FreelancerHasSkill= new FreelancerHasSkill(1,0,0);
  skillName: string="";
  newSkill:Skill=new Skill(0,"");

  constructor(public userSer : UserProfileService, public router: Router, 
   public ac: ActivatedRoute,public authServ:AuthService,)  { }

  ngOnInit(): void {
    
     this.freelancerId=this.authServ.getCurrentUser()?.id;

    this.userSer.getAllSkills().subscribe(a=>{
      this.skills[1]=a;
  

    })
  }
  onAppClickToStartProcess(SkillId:Number){

  }
  close(){
    this.router.navigateByUrl("profile/"+this.freelancerId+"/personalInfo/"+this.freelancerId)
    
  }
  Add(){
    console.log("this.skillName1")
    console.log(this.skillName)
    
    this.userSer.getAllSkills().subscribe(a=>{
      this.skills[1]=a;
      
    })
      for(let i=0; i<this.skills[1].length;i++){

        if(this.skillName==this.skills[1][i].name){
          this.freelancerNewSkill.skillId=this.skills[1][i].id

          this.freelancerNewSkill.freelancerId=this.freelancerId;
          this.userSer.AddFreelancerSkill(this.freelancerNewSkill).subscribe(a=>{});
          break;


        }
    //     else
    //     {
    //       this.newSkill.name=this.skillName;
    //       this.userSer.postNewSkill(this.newSkill).subscribe()

    //       //   this.userSer.getAllSkills().subscribe(a=>{
    //       //   this.skills[1]=a;
            
    //       // })
    //       //   for(let i=0; i<this.skills[1].length;i++){
      
    //       //     if(this.skillName==this.skills[1][i].name){
    //       //       this.freelancerNewSkill.skillId=this.skills[1][i].id
      
    //       //       this.freelancerNewSkill.freelancerId=this.freelancerId;
    //       //       this.userSer.AddFreelancerSkill(this.freelancerNewSkill).subscribe(a=>{});
      
    //       //     }
    //       //   }
          
    // this.activeModal.close();

    //     }
     
        }
        this.router.navigateByUrl("profile/"+this.freelancerId+"/personalInfo/"+this.freelancerId)
    
  }

}
