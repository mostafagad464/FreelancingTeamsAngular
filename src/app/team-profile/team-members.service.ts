import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TeamMember } from '../_models/team-member';

@Injectable({
  providedIn: 'root'
})
export class TeamMembersService {

  constructor(public http:HttpClient) { }

  baseUrl='https://localhost:7152/api/TeamMembers';

  addTeamMember(member:TeamMember){
    return this.http.post<any>(this.baseUrl,member);
  }

  getTeamMembers(id:number){
    return this.http.get<number[]>(this.baseUrl+"/"+id);
  }

  removeTeamMember(id:number, fId:number){
    return this.http.delete<any>(this.baseUrl+"/"+id+"?freelancerId="+fId);
  }

}
