import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { UserProfileService } from 'src/app/_services/user-profile.service';
import { AddSkillComponent } from '../add-skill/add-skill.component';
import { EditskillsComponent } from '../editskills/editskills.component';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  freelancerSkills:any[]=[];
  sub1:Subscription|null=null;
  freelancerIdRouting:Number=0;
  constructor(public userSer:UserProfileService, public ac:ActivatedRoute,public modalService: NgbModal,public router:Router) { 

  }
  ngOnInit(): void {
    this.ac.params.subscribe(a=>{

      console.log(a['id']);
      this.userSer.getUserSkillsById(a['id']).subscribe(a=>{
        console.log("",this.freelancerSkills)
        this.freelancerSkills[1]=a;
        this.freelancerIdRouting=this.freelancerSkills[1][0].freelancerId;
        console.log("heree",this.freelancerIdRouting)
        console.log(this.freelancerIdRouting)
        console.log(this.freelancerSkills[1][0].freelancerId)

        for(let i=0; i<this.freelancerSkills[1].length;i++){
          console.log(this.freelancerSkills[1][i].efficiancyRate)
          this.freelancerSkills[1][i].efficiancyRate = (this.freelancerSkills[1][i].efficiancyRate/5)*100;
        }
          
        });

    }
    )

  }
  openModalAdd() {
    const modalRef = this.modalService.open(AddSkillComponent,
      {
        scrollable: true,
        windowClass: 'myCustomModalClass',
      });
      
    modalRef.result.then((result:any) => {
      console.log(result);
    }, (reason:any) => {
    });
  }
  openModalEdit() {
    const modalRef = this.modalService.open(EditskillsComponent,
  
      {
        scrollable: true,
        windowClass: 'myCustomModalClass',
      });
  
    modalRef.result.then((result:any) => {
      console.log(result);
    }, (reason:any) => {
    });
  }




}
