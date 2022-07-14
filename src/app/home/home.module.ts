import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { ContainerComponent } from './container/container.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    SliderComponent,
    ContainerComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ]
,
exports:[SliderComponent,ContainerComponent,CardComponent]
})
export class HomeModule { }
