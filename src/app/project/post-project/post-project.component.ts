import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/_models/project';
import { Review } from 'src/app/_models/review';
import { AuthService } from 'src/app/_services/auth.service';
import { ProjectService } from 'src/app/_services/project.service';

@Component({
  selector: 'app-post-project',
  templateUrl: './post-project.component.html',
  styleUrls: ['./post-project.component.css']
})
export class PostProjectComponent implements OnInit {

  pro:Project=new Project(0,new Date,"New Project" ,"Available",0,"Project Descrption",3,0,0,2);
  id:number=0;
  clientid:number=0;
  Add(){
    this.clientid= this.authSer.getCurrentUser()?.id;
    this.pro.clientId=this.clientid;
      this.proServ.createProject(this.pro).subscribe(a=>{
        this.id=a.id;
        console.log(this.id);
        this.router.navigate(['/projects/details/',this.id])
      });
       
  }
  create(){
    this.Add();
    console.log(this.pro);
  }
  constructor(public proServ:ProjectService,public router:Router ,public authSer:AuthService) { }

  ngOnInit(): void {
  }

}
