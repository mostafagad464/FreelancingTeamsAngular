import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowFreelancersComponent } from './show-freelancers/show-freelancers.component';
import { FreelancersRoutingModule } from './freelancers.routing';



@NgModule({
  declarations: [
    ShowFreelancersComponent
  ],
  imports: [
    CommonModule, 
    FreelancersRoutingModule
  ]
})
export class FreelancersModule { }
