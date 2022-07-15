import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Team } from '../_models/team';
import { TeamMember } from '../_models/team-member';

@Injectable({
  providedIn: 'root'
})
export class TeamService {


  private baseUrl = 'https://localhost:7152/api/Teams/';

  imageurl = "https://localhost:7152/api/Image/Team/";

  constructor(private http: HttpClient) { }

  getTeam(id: number) {
    return this.http.get<Team>(this.baseUrl + id);
  }

  getTeams(){
    return this.http.get<Team[]>(this.baseUrl);
  }

  AddTeamMember(temMember: TeamMember) {
    return this.http.post<Team>(this.baseUrl + "TeamMember", temMember);
  }

  EditTeam(team: Team) {
    return this.http.put(this.baseUrl + team.id, team);
  }


  createTeam(team:Team)
  {
    return this.http.post<Team>(this.baseUrl, team);
  }

  addImage(TeamId: number, img: FormData) {
    return this.http.post<any>(this.imageurl + TeamId, img);
  }



}
