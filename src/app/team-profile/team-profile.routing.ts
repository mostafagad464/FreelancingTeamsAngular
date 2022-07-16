
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddTeamMemberComponent } from './add-team-member/add-team-member.component';
import { ShowMembersComponent } from './show-members/show-members.component';
import { RemoveTeamMemberComponent } from './remove-team-member/remove-team-member.component';
import { EditTeamInfoComponent } from './edit-team-info/edit-team-info.component';
import { ShowProjectsComponent } from './show-projects/show-projects.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ShowReviewComponent } from './show-review/show-review.component';
import { CreateTeamComponent } from './create-team/create-team.component';
import { ShowTeamsComponent } from './show-teams/show-teams.component';
import { AnnounceComponent } from './announce/announce.component';
import { TeamPostComplainComponent } from './team-post-complain/team-post-complain.component';
import { AuthGuard } from '../_helpers/auth.guard';
import { HeaderComponent } from "./header/header.component";

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
    { path: 'showteams', component: ShowTeamsComponent, canActivate: [AuthGuard] },
    { path: 'showteams/:id', component: ShowTeamsComponent, canActivate: [AuthGuard] },

]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})


export class TeamProfileRoutingModule {
}
