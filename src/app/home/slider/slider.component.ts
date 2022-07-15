import { Component, Input, OnInit } from '@angular/core';
import { elementAt, Subscription } from 'rxjs';
import { Team } from 'src/app/_models/team';
import { AuthService } from 'src/app/_services/auth.service';
import { TeamService } from 'src/app/_services/team.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  userId:any;
  teams :Team[]=[];
  sub1:Subscription|null=null;
  filterBySpecial(e:any)
  {
    let tabValue=e.target.innerHTML;
    console.log(this.teams.filter(tm=>tm.specialization==tabValue))
  }

  constructor(public authserv:AuthService,public teamServ:TeamService) { }

  ngOnInit(): void {
    this.userId=this.authserv.getCurrentUser()?.id;
    this.sub1=this.teamServ.getTeams().subscribe(t=>{
      this.teams=t;
    })
  }

}
