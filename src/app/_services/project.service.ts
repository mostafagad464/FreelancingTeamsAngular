import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../_models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  baseUrl="https://localhost:7152/api/Projects/"

  constructor(public http:HttpClient) { }

  getProjectById(id:number){
    return this.http.get<Project>(this.baseUrl+id)
  }
}
