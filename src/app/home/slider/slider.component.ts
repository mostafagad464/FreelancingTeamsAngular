import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { elementAt, Subscription } from 'rxjs';
import { Project } from 'src/app/_models/project';
import { Team } from 'src/app/_models/team';
import { User } from 'src/app/_models/user';
import { AuthService } from 'src/app/_services/auth.service';
import { ProjectService } from 'src/app/_services/project.service';
import { TeamService } from 'src/app/_services/team.service';
import { UserProfileService } from 'src/app/_services/user-profile.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit,OnChanges {
  userId:any;
  teams :Team[]=[];
  beforeFilterTeams:Team[]=[];
  userInfo = new User(0, "", 0, 0, new Date().toISOString(), "", "", "", 0, true, "", true, false, null, null, true, null, null, null, null,
      null);
  sub1:Subscription|null=null;
  sub2:Subscription|null=null;
  sub3:Subscription|null=null;
  filterBySpecial(e:any)
  {

    let tabValue=e.target.innerHTML;
    if(tabValue=="All")
    {
      this.teams=this.beforeFilterTeams
    }

    else
    this.teams=this.beforeFilterTeams.filter(tm=>tm.specialization==tabValue)
  }

  constructor(public authserv:AuthService,public teamServ:TeamService,public projectserv:ProjectService,public useeserv:UserProfileService) { }
  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit(): void {
    this.userId=this.authserv.getCurrentUser()?.id;
    this.sub3=this.useeserv.getUserInfoByid(this.userId).subscribe(u=>
      {
        this.userInfo=u;

      }
    )

    
    
    this.sub1=this.teamServ.getTeams().subscribe(t=>{
      this.beforeFilterTeams=t.sort((a, b) => (b.rate) - (a.rate));
      console.log("special ",t.find(f=>f.id==1))
      this.teams=this.beforeFilterTeams
      
      
    })
  }
  

}
