import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../_models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  baseUrl2='https://localhost:7152/api/Projects';


  constructor(public http:HttpClient) { }

  getProjects(){
    return this.http.get<Project[]>(this.baseUrl2);
  }
  
}
