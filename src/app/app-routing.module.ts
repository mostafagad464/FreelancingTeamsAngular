import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditpersonalInfoComponent } from './_user/user-profile/editpersonal-info/editpersonal-info.component';
import { HeaderComponent } from './_user/user-profile/header/header.component';
import { PersonalInfoComponent } from './_user/user-profile/personal-info/personal-info.component';
import { ProjectsComponent } from './_user/user-profile/projects/projects.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { AddCertificateComponent } from './_user/user-profile/add-certificate/add-certificate.component';
import { AddExperienceComponent } from './_user/user-profile/add-experience/add-experience.component';
import { CertificatesComponent } from './_user/user-profile/certificates/certificates.component';
import { EditCertificatesComponent } from './_user/user-profile/edit-certificates/edit-certificates.component';
import { EditexperienceComponent } from './_user/user-profile/editexperience/editexperience.component';
import { EditskillsComponent } from './_user/user-profile/editskills/editskills.component';
import { ExperienceComponent } from './_user/user-profile/experience/experience.component';
import { SkillsComponent } from './_user/user-profile/skills/skills.component';
import { ChatComponent } from './messages/chat/chat.component';
import { TeamChatComponent } from './messages/team-chat/team-chat.component';
import { HomeComponent } from './Layout/home/home.component';
import { AddPortfolioComponent } from './_user/user-profile/add-portfolio/add-portfolio.component';
import { AddSkillComponent } from './_user/user-profile/add-skill/add-skill.component';
import { EducationalInfoComponent } from './_user/user-profile/educational-info/educational-info.component';
import { EditeducationalInfoComponent } from './_user/user-profile/editeducational-info/editeducational-info.component';
import { AddEducationComponent } from './_user/user-profile/add-education/add-education.component';
import { PostComplainsComponent } from './_user/user-profile/post-complains/post-complains.component';
import { ErrorComponent } from './shared/error/error.component';
import { AddProposalComponent } from './proposal/add-proposal/add-proposal.component';
import { AllProposalsComponent } from './proposal/all-proposals/all-proposals.component';
import { AdddealComponent } from './deal/adddeal/adddeal.component';
import { AuthGuard } from './_helpers/auth.guard';
import { MainInfoComponent } from './account/main-info/main-info.component';
import { SliderComponent } from './home/slider/slider.component';
import { UserwalletComponent } from './wallet/userwallet/userwallet.component';

import { BioComponent } from './_user/user-profile/bio/bio.component';

import { AnonymousGuard } from './_helpers/anonymous.guard';
import { ShowProjectsComponent } from './team-profile/show-projects/show-projects.component';
import { SubmitprojectComponent } from './submitproject/submitproject.component';



const routes: Routes = [

  { path: "", component: HomeComponent, pathMatch: "full" },

  { path: "login", component: LoginComponent, canActivate: [AnonymousGuard] },
  { path: "register", component: RegisterComponent, canActivate: [AnonymousGuard] },

  { path: "info", component: MainInfoComponent},

  { path: "skills/:id", component: SkillsComponent, canActivate: [AuthGuard] },
  { path: "skills/edit/:id", component: EditskillsComponent, canActivate: [AuthGuard] },
  { path: "chat", component: ChatComponent, canActivate: [AuthGuard] },
  { path: "chat/:id", component: ChatComponent, canActivate: [AuthGuard] },
  { path: "chat/team/:id", component: TeamChatComponent, canActivate: [AuthGuard] },

  { path: "Addproposal/:ProjId", component: AddProposalComponent, canActivate: [AuthGuard] },
  { path: "AllProposals/:ProjId", component: AllProposalsComponent, canActivate: [AuthGuard] },
  { path: "adddeal/:ProjId/:teamId", component: AdddealComponent, canActivate: [AuthGuard] },
  { path: "submitproject/:ProjId", component: SubmitprojectComponent},

  {
    path: "postComplain/:id",
    component: PostComplainsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "review",
    loadChildren: () => import('./reviews/reviews.module').then(m => m.ReviewsModule),
    canActivate: [AuthGuard]
  },
  {
    path: "projects",
    loadChildren: () => import('./project/project.module').then(m => m.ProjectModule),
    canActivate: [AuthGuard]
  },
  {
    path: "freelancers",
    loadChildren: () => import("./freelancers/freelancers.module").then(f => f.FreelancersModule),
    canActivate: [AuthGuard]
  },
  {
    path: "team",
    loadChildren: () => import("./team-profile/team-profile.module").then(f => f.TeamProfileModule),
    canActivate: [AuthGuard]
  },
  {
    path: "admin",
    loadChildren: () => import('./admin-profile/admin-profile.module').then(m => m.AdminProfileModule),
    canActivate: [AuthGuard]
  },
  {
    path: "review",
    loadChildren: () => import('./reviews/reviews.module').then(m => m.ReviewsModule),
    canActivate: [AuthGuard]
  },
  {
    path: "profile/:id", component: HeaderComponent, children:
      [

        {
          path: "addCertificate",
          component: AddCertificateComponent,

        },
        { path: "addEducation", component: AddEducationComponent },
        {
          path: "editCertificate/:id/:title",
          component: EditCertificatesComponent,

        },
        {
          path: "editEducation/:id/:gradYear",
          component: EditeducationalInfoComponent,

        },


        { path: "editExperience/:id/:startDate", component: EditexperienceComponent},
        { path: "addExperience", component: AddExperienceComponent},
        {path:"editBio/:id",component:BioComponent}
        ,
        {path:"wallet/:id",component:UserwalletComponent},
        { path: "editSkills/:id", component: EditskillsComponent},
        { path: "addSkill/:id", component: AddSkillComponent},

        {
          path: "educations/:id", component: EducationalInfoComponent, children:
            [
              { path: "editEducation/:id/:gradYear", component: EditeducationalInfoComponent, outlet: 'modal' },

            ]
        },
        {
          path: "addSkill/:id",
          component: AddSkillComponent,
          outlet: 'modal'
        },
        {
          path: "educations/:id", component: EducationalInfoComponent
        },
        {
          path: "portfolio/:id", component: ProjectsComponent,

        },
        { path: "addPortofolio", component: AddPortfolioComponent },
        {
          path: "experiences/:id", component: ExperienceComponent
        },
        {
          path: "certificates/:id", component: CertificatesComponent,

        },

        {
          path: "personalInfo/:id", component: PersonalInfoComponent
        },
        { path: "editpersonalInfo/:id", component: EditpersonalInfoComponent },

        {
          path: "certificates/:id", component: CertificatesComponent, children: [

          ]
        },
        {
          path: 'showProjects/:id',
          component: ShowProjectsComponent
          // outlet: 'showProjects'
        }
      ],
    canActivate: [AuthGuard]
  },
  {
    path: "certificates/:id", component: CertificatesComponent,
    children:
      [
        {
          path: "editCertificate/:id/:title",
          component: EditCertificatesComponent,
          outlet: 'modal'
        },

      ],
    canActivate: [AuthGuard]
  },
  {
    path: "experiences/:id", component: ExperienceComponent,
    children:
      [
        {
          path: "editExperience/:id/:startDate",
          component: EditexperienceComponent,
          outlet: 'modal'
        },
        {
          path: "addExperience",
          component: AddExperienceComponent,
          outlet: 'modal'
        }
      ],
    canActivate: [AuthGuard]
  },

  { path: "userHome", component: SliderComponent },

  { path: "**", component: ErrorComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
