import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FreelancerHasSkill } from 'src/app/_models/freelancer-has-skill';

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
  freelancerUpdatedSkill=new FreelancerHasSkill(1,0,0);
  freelancerIdRouting:Number=0;
  freelancerIdRoutingSplit:string[]=[];
  value :Number=4

  constructor(public userSer : UserProfileService, public router: Router, 
    public activeModal:NgbActiveModal,public ac: ActivatedRoute,public modalService: NgbModal) { }
  
  ngOnInit(): void {


    this.ac.params.subscribe(a=>{
      this.freelancerIdRoutingSplit=this.router.routerState.snapshot.url.split("/")
      console.log(this.freelancerIdRoutingSplit)
    

      this.userSer.getUserSkillsById(this.freelancerIdRoutingSplit[2]).subscribe(a=>{
        this.freelancerSkills[1]=a;
        console.log("here")

        console.log(this.freelancerSkills[1][0].efficiancyRate)
        })
  })

  
  }
  close(){
  
    this.activeModal.close();
     }
  Edit(){

    for(let i=0; i<this.freelancerSkills[1].length;i++){
       this.userSer.UpdateFreelancerSkills(this.freelancerSkills[1][i].freelancerId
        ,this.freelancerSkills[1][i].skillId,this.freelancerSkills[1][i]).subscribe()
    }
    this.activeModal.close();
  }
  Delete(freelancerId:number,skillId:number){
    this.userSer.DeleteFreelancerSkill(freelancerId,skillId).subscribe(a=>{
      this.ngOnInit();
    });
  }



}

