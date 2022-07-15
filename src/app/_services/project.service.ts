import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../_models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  baseurl="https://localhost:7152/api/Projects/";

  constructor(public http:HttpClient) { }

   getAllProjects(){
     return this.http.get<Project[]>(this.baseurl);
   }

   createProject(pro:Project){
    console.log(this.http.post<Project>(this.baseurl,pro));
     return this.http.post<Project>(this.baseurl,pro)
   }

  updateProject(pro:Project){
    return this.http.put<Project>(this.baseurl,pro);
  }

  deleteProject(id:Number){
    return this.http.delete(this.baseurl+id);
  }
  
  getProject(id:number){
   return this.http.get<Project>(this.baseurl+id);
  }

  getProjectById(id:number){
    return this.http.get<Project>(this.baseurl+id)
  }
}
