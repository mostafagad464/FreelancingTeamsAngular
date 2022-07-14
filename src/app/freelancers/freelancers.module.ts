import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowFreelancersComponent } from './show-freelancers/show-freelancers.component';
import { FreelancersRoutingModule } from './freelancers.routing';
import { SearchPipe } from '../_pipes/search.pipe';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ShowFreelancersComponent,
    // SearchPipe
  ],
  imports: [
    CommonModule, 
    FreelancersRoutingModule,
    FormsModule
    // SharedModule
  ],
  exports:[
    // SearchPipe
  ]
  
})
export class FreelancersModule { }
