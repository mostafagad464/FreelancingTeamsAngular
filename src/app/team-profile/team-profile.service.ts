import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Team } from '../_models/team';

@Injectable({
  providedIn: 'root'
})
export class TeamProfileService {

  baseUrl="https://localhost:7152/api/Teams/";


  constructor(public http:HttpClient) { }
  
  getTeamById(id:number){
    return this.http.get<Team>(this.baseUrl+id);
  }

  addTeamMember(team:Team){
    return this.http.post<Team>(this.baseUrl,team);
  }


  updateTeam(id:number,team:Team){
    return this.http.put<Team>(this.baseUrl+id,team);
  }

}


