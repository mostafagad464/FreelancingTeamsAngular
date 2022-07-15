import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsProjectComponent } from './details-project/details-project.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { ListProjectsComponent } from './list-projects/list-projects.component';
import { PostProjectComponent } from './post-project/post-project.component';

const routes: Routes = [
  {path:"list",component:ListProjectsComponent},
  {path:"edit/:id",component:EditProjectComponent},
  {path:"create",component:PostProjectComponent},
  {path:"post",component:PostProjectComponent},
  {path:"details/:id",component:DetailsProjectComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class projectRouterModule { }
