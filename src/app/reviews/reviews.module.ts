import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostReviewComponent } from './post-review/post-review.component';
import { Routes,RouterModule } from '@angular/router'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';

const routes:Routes=[
  {path:'addReview/:clientId/:teamId/:projectId', component:PostReviewComponent}
]

@NgModule({
  declarations: [
    PostReviewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    RatingModule,
  ]
})
export class ReviewsModule { }
