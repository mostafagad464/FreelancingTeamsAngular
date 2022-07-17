import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { Routes, RouterModule } from '@angular/router';
import { ShowClientsComponent } from './show-clients/show-clients.component';
import { ShowFreelancersComponent } from './show-freelancers/show-freelancers.component';
import { ShowTeamsComponent } from './show-teams/show-teams.component';
import { ShowComplaintComponent } from './show-complaint/show-complaint.component'

const routes : Routes = [
  {path:'adminProfile/:id', component:AdminProfileComponent,
  children:[
    {path:'showClients', component:ShowClientsComponent},
    {path:'showFreelancers', component:ShowFreelancersComponent},
    {path:'showTeams', component:ShowTeamsComponent},
    {path:'showComplaints', component:ShowComplaintComponent}
  ]  
}
]

@NgModule({
  declarations: [
    AdminProfileComponent,
    ShowClientsComponent,
    ShowFreelancersComponent,
    ShowTeamsComponent,
    ShowComplaintComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class AdminProfileModule { }
