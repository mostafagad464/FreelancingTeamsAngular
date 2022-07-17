import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Skill } from '../_models/skill';
import { FreelancerHasSkill } from '../_models/freelancer-has-skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  baseUrl='https://localhost:7152/api/'

  constructor(public http:HttpClient) { }

  getSkill(id:Number){
    return this.http.get<Skill>(this.baseUrl+"Skills/"+id)
  }

  getFreelancersSkills(){
    return this.http.get<FreelancerHasSkill[]>(this.baseUrl+"FreelancerSkills")
  }
}
