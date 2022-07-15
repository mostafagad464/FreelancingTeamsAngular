import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdddealComponent } from './adddeal/adddeal.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AdddealComponent],
  imports: [
    CommonModule,FormsModule,RouterModule
  ],
  exports:[AdddealComponent]
})
export class DealModule { }
