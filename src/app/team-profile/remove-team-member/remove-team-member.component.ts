import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Account } from 'src/app/_models/account';
import { Team } from 'src/app/_models/team';
import { TeamMember } from 'src/app/_models/team-member';
import { AccountService } from 'src/app/_services/account.service';
import { FreelancersService } from '../freelancers.service';
import { TeamProfileService } from '../team-profile.service';

@Component({
  selector: 'app-remove-team-member',
  templateUrl: './remove-team-member.component.html',
  styleUrls: ['./remove-team-member.component.css']
})
export class RemoveTeamMemberComponent implements OnInit {
  freelancers:number[]=[

  ]

  constructor(public ac:ActivatedRoute,
              public teamServ:TeamProfileService,
              public freeServ:FreelancersService,
              public router:Router, 
              public fb : FormBuilder,
              public accountServ:AccountService) { }

  formGroup: FormGroup | null | undefined;

  member:TeamMember=new TeamMember(0,0,false);

  team:Team={
    id: 0,
    logo: '',
    webSite: '',
    isVerfied: false,
    creationDate: new Date(1/1/2030),
    description: '',
    rate: 0,
    leaderId: 0,
    walletId: 0,
    name:'',
    deals:[],
    reviews:[],
    teamMembers:[]
  }

  memberFreelancerId='';
  freelancersIds:number[]=[

  ]

  freelancersIds1:number[]=[

  ]



  freelancersNames:string[]=[

  ]

  accounts:Account[]=[

  ]

  mName='';
  nm='';
  nameToRemove='';
  idToRemove=0;
  nam='';
  nam1='';

  options:string[]=[
    
  ]
  
  filteredOptions:string[]=[

  ]

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    this.sub1?.unsubscribe();
  }

  sub:Subscription|null=null;
  sub1:Subscription|null=null;

  Remove(){

    for(var i=0;i<this.accounts.length;i++){
      this.nam=this.nameToRemove.split(" ")[0];
      this.nam1=this.nameToRemove.split(" ")[1];
      if(this.accounts[i].firstName==this.nam && this.accounts[i].lastName==this.nam1){
        this.idToRemove=this.accounts[i].id;
      }
    }

    this.freelancersIds=[];

    this.freeServ.getTeamMembers(this.member.teamId).subscribe(a=>{
      this.freelancers=a;

      console.log(this.freelancers);

      for(var i = 0 ; i < this.freelancers.length ; i++){
        this.freelancersIds.push(this.freelancers[i]);
        console.log(this.freelancers[i]);
      }
    });

    let c=confirm("Are you sure yoy want to remove "+this.nameToRemove);
    if(c){
      this.freeServ.removeTeamMember(this.member.teamId,this.idToRemove).subscribe(a=>{
        console.log('removed');
        alert(this.nameToRemove+" was removed successfully");
        this.freelancersNames=[];
        this.accountServ.getAccounts().subscribe(a=>{
          this.accounts=a;
        })
        for(var i = 0 ; i < this.accounts.length ; i++){
          for(var y=0;y<this.freelancersIds.length;y++){
            if(this.freelancersIds[y]==this.accounts[i].id){
              this.mName=(this.accounts[i].firstName+" "+this.accounts[i].lastName);
              this.freelancersNames.push(this.mName);
            }
          }
        }
      });  
    }
  }

  ngOnInit(): void {

    console.log("freelancersIds1:"+this.freelancersIds1)
    
    this.accountServ.getAccounts().subscribe(a=>{
      this.accounts=a;
    })

    for (var i = 0; i < this.accounts.length; i++) {
      this.freelancersIds1.push(this.accounts[i].id);
    }
    
    this.ac.params.subscribe(a=>{
      this.teamServ.getTeamById(a['id']).subscribe(a=>{
      this.team=a;
    })
    })

    this.ac.params.subscribe(a=>{
      this.member.teamId=parseInt(a['id']);
    })
    
    this.freeServ.getTeamMembers(this.member.teamId).subscribe(a=>{
      this.freelancers=a;
      
      for(var i = 0 ; i < this.freelancers.length ; i++){
        this.freelancersIds.push(this.freelancers[i]);
      }

      for(var i = 0 ; i < this.accounts.length ; i++){
        for(var y=0;y<this.freelancersIds.length;y++){
          if(this.freelancersIds[y]==this.accounts[i].id){
            this.mName=(this.accounts[i].firstName+" "+this.accounts[i].lastName);
            this.freelancersNames.push(this.mName);
          }
        }
      }
      console.log("freelancersNames"+this.freelancersNames);
    });
  }
}
