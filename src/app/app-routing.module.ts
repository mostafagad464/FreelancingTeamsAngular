import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { HomeComponent } from './Layout/home/home.component';
=======
import { TeamProfileComponent } from './team-profile/team-profile/team-profile.component';
>>>>>>> FreelancingTeamsAngular/EMBranch

const routes: Routes = [
  {path:'', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
