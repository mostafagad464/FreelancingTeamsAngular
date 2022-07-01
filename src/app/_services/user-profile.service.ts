import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../_models/user';
import { identifierName } from '@angular/compiler';
import { FreelancerHasSkill } from '../_models/freelancer-has-skill';
import { Skill } from '../_models/skill';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {


  // baseUrl = "https://localhost:7152/api/users/";
  baseUrl ="https://localhost:7152/api/"

  getUserInfoByid(id:number){
    return this.http.get<User>(this.baseUrl+"users/"+id);
  }
  updateUser(user:User,id:number){
    return this.http.put<User>(this.baseUrl+id,user);

  }
  getUserSkillsById(id:number)
  {
    return this.http.get<FreelancerHasSkill>(this.baseUrl+"FreelancerSkills/GetFreelancerSkills/"+id);
  }
  getAllSkills(){
    return this.http.get<Skill>(this.baseUrl+"Skills");
  }
  DeleteFreelancerSkill(freelancerId:number, skillId:number){
    return this.http.delete<FreelancerHasSkill>(this.baseUrl+"FreelancerSkills/"+freelancerId+"?skillId="+skillId);
  }
  AddFreelancerSkill(newSkill:FreelancerHasSkill){
    return this.http.post<FreelancerHasSkill>(this.baseUrl+"FreelancerSkills", newSkill)
  }

  constructor(public http : HttpClient) { }
}
