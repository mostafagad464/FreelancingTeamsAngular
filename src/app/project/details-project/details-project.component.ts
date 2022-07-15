import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Project } from 'src/app/_models/project';
import { ProjectService } from 'src/app/_services/project.service';

@Component({
  selector: 'app-details-project',
  templateUrl: './details-project.component.html',
  styleUrls: ['./details-project.component.css']
})
export class DetailsProjectComponent implements OnInit {

  project:Project=new Project(0,new Date,"Project","",0,"Descrption",2,0,0,2);
  constructor(public activateRoute:ActivatedRoute,public proSer:ProjectService ,public router:Router) { }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    this.sub2?.unsubscribe();
  }
  sub:Subscription|null=null;
  sub2:Subscription|null=null;

  ngOnInit(): void {
   this.sub= this.activateRoute.params.subscribe(a=>{
       this.sub2= this.proSer.getProject(a['id']).subscribe(p=>this.project=p)
    })
  }
  edit(){
    this.router.navigate(['/projects/edit/',this.project.id])
  }

}
