import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { elementAt, Subscription } from 'rxjs';
import { Team } from 'src/app/_models/team';
import { AuthService } from 'src/app/_services/auth.service';
import { TeamService } from 'src/app/_services/team.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit,OnChanges {
  userId:any;
  teams :Team[]=[];
  beforeFilterTeams:Team[]=[];
  sub1:Subscription|null=null;
  filterBySpecial(e:any)
  {

    let tabValue=e.target.innerHTML;
    if(tabValue=="All")
    {
      this.teams=this.beforeFilterTeams
    }
    else if(tabValue=="Other")
    {

    }
    else
    this.teams=this.beforeFilterTeams.filter(tm=>tm.specialization==tabValue)
  }

  constructor(public authserv:AuthService,public teamServ:TeamService) { }
  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit(): void {
    this.userId=this.authserv.getCurrentUser()?.id;
    
    this.sub1=this.teamServ.getTeams().subscribe(t=>{
      this.beforeFilterTeams=t.sort((a, b) => (b.rate) - (a.rate));
      console.log("special ",t.find(f=>f.id==1))
      this.teams=this.beforeFilterTeams
      
      
    })
  }
  

}
