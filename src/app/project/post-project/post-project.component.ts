import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/_models/project';
import { ProjectService } from 'src/app/_services/project.service';

@Component({
  selector: 'app-post-project',
  templateUrl: './post-project.component.html',
  styleUrls: ['./post-project.component.css']
})
export class PostProjectComponent implements OnInit {

  pro:Project=new Project(0,new Date,"New Project" ,0,0,"Project Descrption","Week",0,0,0);
  Add(){
      this.proServ.createProject(this.pro);
      this.router.navigateByUrl("/listprojects")
  }
  create(){
    this.Add();
  }
  constructor(public proServ:ProjectService,public router:Router) { }

  ngOnInit(): void {
  }

}
