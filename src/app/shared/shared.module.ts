import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarsComponent } from './stars/stars.component';
import { SearchPipe } from '../_pipes/search.pipe';



@NgModule({
  declarations: [
    StarsComponent,
  ],
  imports: [
    CommonModule
  ], 
  exports:[
    StarsComponent,
  ]
})
export class SharedModule { }
