import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/_models/team';
import { TeamService } from 'src/app/_services/team.service';

@Component({
  selector: 'app-show-teams',
  templateUrl: './show-teams.component.html',
  styleUrls: ['./show-teams.component.css']
})
export class ShowTeamsComponent implements OnInit {

  constructor(private teamService: TeamService) { }

  teams: Team[] = [];
  stringId:string = "";

  ngOnInit(): void {
    this.teamService.getTeams().subscribe(
      t => {
        console.log(t)
        this.teams = t
      }
    )
  }

  displayMainInformation(id:number)
  {
    console.log("mainInformation-team-"+id);
    if(document.getElementById("members-link-team-"+id)!.className == "active")
    {
      document.getElementById("members-team-"+id)!.style.display = "none";
      document.getElementById("members-link-team-"+id)!.classList.remove("active");
      document.getElementById("members-link-team-"+id)!.ariaCurrent = "false";
    }
    if(document.getElementById("technologies-link-team-"+id)!.className == "active")
    {
      document.getElementById("technologies-team-"+id)!.style.display = "none";
      document.getElementById("technologies-link-team-"+id)!.classList.remove("active");
      document.getElementById("technologies-link-team-"+id)!.ariaCurrent = "false";
    }
    document.getElementById("mainInformation-team-"+id)!.style.display = "block";
    document.getElementById("mainInformation-link-team-"+id)!.classList.add("active");
    document.getElementById("mainInformation-link-team-"+id)!.ariaCurrent = "true";

  }
  displayTechnologies(id:number)
  {
    console.log("technologies-team-"+id);

    if( document.getElementById("mainInformation-link-team-"+id)!.className == "active")
    {
      document.getElementById("mainInformation-team-"+id)!.style.display = "none";
      document.getElementById("mainInformation-link-team-"+id)!.classList.remove("active");
      document.getElementById("mainInformation-link-team-"+id)!.ariaCurrent = "false";
    }
    if(document.getElementById("members-link-team-"+id)!.className == "active")
    {
      document.getElementById("members-team-"+id)!.style.display = "none";
      document.getElementById("members-link-team-"+id)!.classList.remove("active");
      document.getElementById("members-link-team-"+id)!.ariaCurrent = "false";
    }
    document.getElementById("technologies-team-"+id)!.style.display = "block";
    document.getElementById("technologies-link-team-"+id)!.classList.add("active");
    document.getElementById("technologies-link-team-"+id)!.ariaCurrent = "true";
  }
  displayMembers(id:number)
  {
    console.log("members-team-"+id);
    if( document.getElementById("mainInformation-link-team-"+id)!.className == "active")
    {
      document.getElementById("mainInformation-team-"+id)!.style.display = "none";
      document.getElementById("mainInformation-link-team-"+id)!.classList.remove("active");
      document.getElementById("mainInformation-link-team-"+id)!.ariaCurrent = "false";
    }
    if(document.getElementById("technologies-link-team-"+id)!.className == "active")
    {
      document.getElementById("technologies-team-"+id)!.style.display = "none";
      document.getElementById("technologies-link-team-"+id)!.classList.remove("active");
      document.getElementById("technologies-link-team-"+id)!.ariaCurrent = "false";
    }
    document.getElementById("members-team-"+id)!.style.display = "block";
    document.getElementById("members-link-team-"+id)!.classList.add("active");
    document.getElementById("members-link-team-"+id)!.ariaCurrent = "true";

  }








}
