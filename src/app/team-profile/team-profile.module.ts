import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { RatingModule } from 'primeng/rating';
import { AddTeamMemberComponent } from './add-team-member/add-team-member.component';
import { ShowMembersComponent } from './show-members/show-members.component';
import { RemoveTeamMemberComponent } from './remove-team-member/remove-team-member.component';
import { EditTeamInfoComponent } from './edit-team-info/edit-team-info.component';
import { ShowProjectsComponent } from './show-projects/show-projects.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ShowReviewComponent } from './show-review/show-review.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MatInputModule } from '@angular/material/input';
// import { MatAutocompleteModule } from '@angular/material/autocomplete';



const routes:Routes=[
  // {path:'teamProfile',
  //  component:HeaderComponent
  // },
  {
    path:'teamProfile/:id',
    component:HeaderComponent,
   children:[
    {   
      path: 'showMember/:id',
      component: ShowMembersComponent,
      // outlet: 'showMember'
    },
   ]
  },
  {
    path:'addMember/:id',
    component:AddTeamMemberComponent
  },
  {
    path:'removeMember/:id',
    component:RemoveTeamMemberComponent 
  },
  {
    path:'editInfo/:id',
    component:EditTeamInfoComponent 
  },
  {
    path: 'showProjects/:id',
    component: ShowProjectsComponent
    // outlet: 'showProjects'
  },
  {
    path:'reviews/:id',
    component:ReviewsComponent 
  },
  {
    path:'showReviews/:id',
    component:ShowReviewComponent 
  },

]


@NgModule({
  declarations: [
    HeaderComponent,
    AddTeamMemberComponent,
    ShowMembersComponent,
    RemoveTeamMemberComponent,
    EditTeamInfoComponent,
    ShowProjectsComponent,
    ReviewsComponent,
    ShowReviewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    RatingModule,
    // MatInputModule,
    // MatAutocompleteModule
    
  ],
  exports:[
    HeaderComponent,
  ]
})
export class TeamProfileModule { }
