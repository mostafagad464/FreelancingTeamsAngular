import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/_services/auth.service';
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

  profileId:Number=0;
  userId:Number=0;

  constructor(public userSer:UserProfileService,
     public ac:ActivatedRoute,public modalService: NgbModal,public router:Router,
     public authServ:AuthService) { 

  }
  ngOnInit(): void {
    this.ac.params.subscribe(a=>{
      this.userSer.getUserSkillsById(a['id']).subscribe(a=>{
        this.freelancerSkills[1]=a;
        this.freelancerIdRouting=this.freelancerSkills[1][0].freelancerId;
        for(let i=0; i<this.freelancerSkills[1].length;i++){
            this.freelancerSkills[1][i].efficiancyRate = (this.freelancerSkills[1][i].efficiancyRate/5)*100;
        }
          
        });

    }
    )
    this.profileId=this.authServ.getCurrentUser()?.id;
    this.sub1=this.ac.params.subscribe(x=>{
      this.userId=x['id'];
    })

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
