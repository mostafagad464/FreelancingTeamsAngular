import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models/user';
import { Portoflio } from '../_models/portoflio';
import { FreelancerHasSkill } from '../_models/freelancer-has-skill';
import { Skill } from '../_models/skill';
import { FreelancerCertificates } from '../_models/freelancer-certificates';
import { FreelancerExperience } from '../_models/freelancer-experience';
import { Account } from '../_models/account';


@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor(public http : HttpClient) { }


  baseUrl = "https://localhost:7152/api/";

  getUserInfoByid(id:number){
    return this.http.get<User>(this.baseUrl+"users/"+id);
  }
  updateUser(user:User){
    return this.http.put<User>(this.baseUrl+"users/",user);

  }
  getAccountInfoByid(id:number){
    return this.http.get<Account>(this.baseUrl+"Accounts/"+id);
  }
  updateAccount(accountInfo:Account){
    return this.http.put<Account>(this.baseUrl+"Accounts/",accountInfo);
  }
  getFreelancerPortfolio(id:number)
  {
    return this.http.get<Portoflio[]>(this.baseUrl+"Portoflio/"+id);
  }
  deletePortoflio(id:number)
  {
    return this.http.delete(this.baseUrl+"Portoflio/"+id)
  }
  addPortoflio(portfolio:Portoflio)
  {
    return this.http.post<Portoflio>(this.baseUrl+"Portoflio/",portfolio)
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
  UpdateFreelancerSkills(freelancerId:number, skillId:number, updatedSkill:FreelancerHasSkill){
    return this.http.put<FreelancerHasSkill>(this.baseUrl+"FreelancerSkills/"+freelancerId+"?skillId="+skillId,updatedSkill)
  }

  //certificates
  GetCertificateById(freelancerId:string,title:string){
    return this.http.get<FreelancerCertificates>(this.baseUrl+"FreelancerCertificates/"+freelancerId+"?title="+title)
  }
  GetAllFreelancerCertificates(freelancerId:number){
    return this.http.get<FreelancerCertificates>(this.baseUrl+"FreelancerCertificates/GetFreelancerCertificates/"+freelancerId)
  }
  DeleteFreelancerCertificate(freelancerId:number,title:string){
    return this.http.delete<FreelancerCertificates>(this.baseUrl+"FreelancerCertificates/"+freelancerId+"?title="+title);
  }
  AddFreelancerCertificate(newCertificate:FreelancerCertificates){
    return this.http.post<FreelancerCertificates>(this.baseUrl+"FreelancerCertificates",newCertificate)
  }
  UpdateFreelancerCertificates(freelancerId:number,updatedCertificate:FreelancerCertificates){
    console.log("updated")
     return this.http.put<FreelancerCertificates>(this.baseUrl+"FreelancerCertificates/"+freelancerId,updatedCertificate)
  }
  //experiences
  GetExperienceById(freelancerId:string | number,startDate:string | Date){
    return this.http.get<FreelancerExperience>(this.baseUrl+"FreelancerExperiences/"+freelancerId+"?startDate="+startDate)
  }
  GetAllFreelancerExperiences(freelancerId:number){
    return this.http.get<FreelancerExperience>(this.baseUrl+"FreelancerExperiences/GetFreelancerExperiences/"+freelancerId)
  }
  DeleteFreelancerExperience(freelancerId:number, startDate:Date){
    return this.http.delete<FreelancerExperience>(this.baseUrl+"FreelancerExperiences/"+freelancerId+"?startDate="+startDate);
  }
  AddFreelancerExperience(newExperience:FreelancerExperience){
    return this.http.post<FreelancerExperience>(this.baseUrl+"FreelancerExperiences",newExperience)
  }
  UpdateFreelancerExperiences(freelancerId:number,startDate:Date | string,updatedExperience:FreelancerExperience){
     return this.http.put<FreelancerExperience>(this.baseUrl+"FreelancerExperiences/"+freelancerId+"?startDate="+startDate,updatedExperience)
  }

}
