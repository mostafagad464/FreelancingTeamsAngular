import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Project } from 'src/app/_models/project';
import { Review } from 'src/app/_models/review';
import { ProjectService } from 'src/app/_services/project.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {

  pro:Project=new Project(0,new Date,"Edit Project","",0,"Descrption",2,0,0,2);
  constructor(public activateRoute:ActivatedRoute,public proSer:ProjectService ,public router:Router) { }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    this.sub2?.unsubscribe();
  }
  sub:Subscription|null=null;
  sub2:Subscription|null=null;

  ngOnInit(): void {
   this.sub= this.activateRoute.params.subscribe((a: { [x: string]: number; })=>{
       this.sub2= this.proSer.getProject(a['id']).subscribe((p: Project)=>this.pro=p)
    })
  }

  edit(){
    this.proSer.updateProject(this.pro).subscribe((a: any)=>{
      console.log(a);
      this.router.navigate(['/projects/details/',this.pro.id])
    })
  }
}
