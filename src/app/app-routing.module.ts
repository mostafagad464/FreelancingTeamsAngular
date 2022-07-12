import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamProfileComponent } from './team-profile/team-profile/team-profile.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
