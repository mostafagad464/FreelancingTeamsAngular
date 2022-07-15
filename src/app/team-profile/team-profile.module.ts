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
import { CreateTeamComponent } from './create-team/create-team.component';
import { JoinTeamComponent } from './join-team/join-team.component';
import { ShowTeamsComponent } from './show-teams/show-teams.component';
import { SharedModule } from '../shared/shared.module';
import { SearchInTeamsPipe } from '../_pipes/search-in-teams.pipe';
// import { MatInputModule } from '@angular/material/input';
// import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AnnounceComponent } from './announce/announce.component';
import { TeamPostComplainComponent } from './team-post-complain/team-post-complain.component';

const routes: Routes = [
  {
    path: 'teamPostComplain/:id',
    component: TeamPostComplainComponent,
  },
  {
    path: 'teamProfile/:id',
    component: HeaderComponent,
    children: [
      {
        path: 'showMember/:id',
        component: ShowMembersComponent,
      },
   
      {
        path: 'showProjects/:id',
        component: ShowProjectsComponent,
      },
      {
        path: 'announce/:id',
        component: AnnounceComponent,
      },

    ]
  },



  {
    path: 'teamProfile/:id',
    component: HeaderComponent,
    children: [
      {
        path: 'showMember/:id',
        component: ShowMembersComponent,
        // outlet: 'showMember'
      },
    ]

  },
  {
    path: 'addMember/:id',
    component: AddTeamMemberComponent
  },
  {
    path: 'removeMember/:id',
    component: RemoveTeamMemberComponent
  },
  {
    path: 'editInfo/:id',
    component: EditTeamInfoComponent
  },
  {
    path: 'showProjects/:id',
    component: ShowProjectsComponent
    // outlet: 'showProjects'
  },
  {
    path: 'reviews/:id',
    component: ReviewsComponent
  },
  {
    path: 'showReviews/:id',
    component: ShowReviewComponent
  },
  {
    path: 'createteam',
    component: CreateTeamComponent
  },
  {
    path: 'jointeam',
    component: CreateTeamComponent
  },
  { path: 'showteams', component: ShowTeamsComponent },
  { path: 'showteams/:id', component: ShowTeamsComponent },

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
    ShowReviewComponent,
    ShowMembersComponent,
    AnnounceComponent,
    CreateTeamComponent,
    JoinTeamComponent,
    ShowTeamsComponent,
    SearchInTeamsPipe,
    TeamPostComplainComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    RatingModule,

    SharedModule
    // MatInputModule,
    // MatAutocompleteModule

  ],
  exports: [
    HeaderComponent,
    // SearchPipe
  ]
})
export class TeamProfileModule { }
