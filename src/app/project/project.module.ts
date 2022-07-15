import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostProjectComponent } from './post-project/post-project.component';
import { FormsModule } from '@angular/forms';
import { ListProjectsComponent } from './list-projects/list-projects.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { projectRouterModule } from './project.routing';
import { DetailsProjectComponent } from './details-project/details-project.component';



@NgModule({
  declarations: [
    PostProjectComponent,
    ListProjectsComponent,
    EditProjectComponent,
    DetailsProjectComponent
  ],
  imports: [
    CommonModule,FormsModule,projectRouterModule
  ]
})
export class ProjectModule { }
