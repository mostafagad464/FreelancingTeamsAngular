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
import { AuthGuard } from '../_helpers/auth.guard';
import { TeamProfileRoutingModule } from './team-profile.routing';




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
    FormsModule,
    ReactiveFormsModule,
    RatingModule,

    SharedModule,
    TeamProfileRoutingModule

  ],
  exports: [
    HeaderComponent,
  ]
})
export class TeamProfileModule { }
