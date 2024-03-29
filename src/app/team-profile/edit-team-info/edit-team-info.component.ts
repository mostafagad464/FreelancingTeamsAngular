import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Team } from 'src/app/_models/team';
import { TeamService } from 'src/app/_services/team.service';
import { TeamProfileService } from '../team-profile.service';

@Component({
  selector: 'app-edit-team-info',
  templateUrl: './edit-team-info.component.html',
  styleUrls: ['./edit-team-info.component.css']
})
export class EditTeamInfoComponent implements OnInit {

  Image: File | null = null;

  constructor(public ac:ActivatedRoute, public teamServ:TeamProfileService, public TeamService : TeamService) { }


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
    specialization:'',
    deals:[],
    reviews:[],
    teamMembers:[]
  }

  UpdatedTeam:Team={
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
    specialization:'',
    deals:[],
    reviews:[],
    teamMembers:[]
  }

  Save(){
    console.log(this.UpdatedTeam);
    if(this.UpdatedTeam.logo==null){
      this.UpdatedTeam.logo=this.team.logo;
    }
    if(this.UpdatedTeam.description==null){
      this.UpdatedTeam.description=this.team.description
    }
    if(this.UpdatedTeam.webSite==null){
      this.UpdatedTeam.webSite=this.team.webSite
    }
    if(this.UpdatedTeam.name==null){
      this.UpdatedTeam.name=this.team.name
    }
    if(this.UpdatedTeam.leaderId==0){
      this.UpdatedTeam.leaderId=this.team.leaderId
    }
    if(this.UpdatedTeam.walletId==0){
      this.UpdatedTeam.walletId=this.team.walletId
    }
    if(this.UpdatedTeam.webSite==null){
      this.UpdatedTeam.webSite=this.team.webSite
    }
    this.UpdatedTeam.creationDate=this.team.creationDate;
    if(this.UpdatedTeam.reviews==null){
      this.UpdatedTeam.reviews=this.team.reviews
    }
    if(this.UpdatedTeam.rate==null){
      this.UpdatedTeam.rate=this.team.rate
    }
    if(this.UpdatedTeam.deals==null){
      this.UpdatedTeam.deals=this.team.deals
    }
    if(this.UpdatedTeam.isVerfied==null){
      this.UpdatedTeam.isVerfied=this.team.isVerfied
    }
    
    this.teamServ.updateTeam(this.team.id,this.UpdatedTeam).subscribe(a=>{
      this.UpdatedTeam=a;
      this.UpdatedTeam.name=this.team.name;

      console.log("updatedTeam: "+this.UpdatedTeam.name);
    });
    let fd = new FormData();
    if (this.Image) {
      fd.append("files", this.Image, this.Image.name);
      console.log(this.Image.name);

      this.TeamService.addImage(this.team.id, fd).subscribe(u => {
      })
    }
  }

  ngOnInit(): void {
    this.ac.params.subscribe(a=>{
      this.teamServ.getTeamById(a['id']).subscribe(a=>{
        this.team=a;
        this.team.id=(a['id']);
        this.UpdatedTeam.id=(a['id']);
        this.UpdatedTeam.isVerfied=this.team.isVerfied;
        this.UpdatedTeam.creationDate=this.team.creationDate;
        this.UpdatedTeam.rate=this.team.rate;
        this.UpdatedTeam.walletId=this.team.walletId;
        this.UpdatedTeam.reviews=this.team.reviews;
        this.UpdatedTeam.deals=this.team.deals;
        console.log(this.UpdatedTeam.description)
        console.log("Team: ",this.team)
      })
    })
  }


  //Team Logo
  AddImg(I: any) {
    if (I.target.value) {
      this.Image = <File>I.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(this.Image);
      reader.onload = (_event) => {
        // this.imageurl = reader.result?.toString() ? reader.result.toString() : this.imageurl;
      }
    }
    console.log(this.Image)
  }

}
