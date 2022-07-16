import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/_models/team';
import { TeamService } from 'src/app/_services/team.service';

@Component({
  selector: 'app-show-teams',
  templateUrl: './show-teams.component.html',
  styleUrls: ['./show-teams.component.css']
})
export class ShowTeamsComponent implements OnInit {

  teams:Team[]=[]

  constructor(public teamServ:TeamService) { }

  ngOnInit(): void {
    this.teamServ.getTeams().subscribe(a => {
      this.teams=a;
    })
  }

}
