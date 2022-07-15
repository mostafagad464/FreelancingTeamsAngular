import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { ContainerComponent } from './container/container.component';
import { CardComponent } from './card/card.component';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SliderComponent,
    ContainerComponent,
    CardComponent
  ],
  imports: [
    CommonModule,RatingModule,FormsModule,RouterModule
  ]
,
exports:[SliderComponent,ContainerComponent,CardComponent]
})
export class HomeModule { }
