import { Injectable } from '@angular/core';
import { HttpClient } from '@microsoft/signalr';
import { TeamMember } from '../_models/team-member';

@Injectable({
  providedIn: 'root'
})
export class TeamMemebersService {

  constructor(private http:HttpClient) { }
  baseUrl = "https://localhost:7152/api/TeamMembers"

  // getTeamMember(teamMember:TeamMember)
  // {
    // return this.http.post<TeamMember>(this.baseUrl, teamMember);
  // }
}
