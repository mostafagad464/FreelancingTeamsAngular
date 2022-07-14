import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerachInArrayPipe } from './serach-in-array.pipe';



@NgModule({
  declarations: [
    SerachInArrayPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SerachInArrayPipe
  ]
})
export class PipesModule { }
