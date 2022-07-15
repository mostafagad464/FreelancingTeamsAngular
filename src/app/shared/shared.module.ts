import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarsComponent } from './stars/stars.component';
import { SearchPipe } from '../_pipes/search.pipe';
import { ErrorComponent } from './error/error.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    StarsComponent,
    ErrorComponent,
    UserHeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ], 
  exports:[
    StarsComponent,
    ErrorComponent,
    UserHeaderComponent,
  ]
})
export class SharedModule { }
