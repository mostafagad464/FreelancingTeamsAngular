import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/_models/project';
import { ProjectService } from 'src/app/_services/project.service';

@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.css']
})
export class ListProjectsComponent implements OnInit {

  constructor(public proSer:ProjectService ,public router:Router) { }

  projects:Project[]=[];
  ngOnInit(): void {
    console.log("done");
    this.proSer.getAllProjects().subscribe((project: Project[])=>{
      this.projects=project;
    })
  }
  delete(id:number){
     this.proSer.deleteProject(id).subscribe((p: any)=>console.log(p));
     this.proSer.getAllProjects().subscribe((pro: Project[])=>{
      this.projects=pro;})
  }

}
