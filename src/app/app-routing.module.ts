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
import { ContainerComponent } from './home/container/container.component';
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


const routes: Routes = [

  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent},
  { path: "maininfo", component: MainInfoComponent},
  { path: "skills/:id", component: SkillsComponent, canActivate: [AuthGuard] },
  { path: "skills/edit/:id", component: EditskillsComponent, canActivate: [AuthGuard] },
  { path: "chat", component: ChatComponent, canActivate: [AuthGuard] },
  { path: "chat/:id", component: ChatComponent, canActivate: [AuthGuard] },
  { path: "chat/team/:id", component: TeamChatComponent, canActivate: [AuthGuard] },

  { path: "Addproposal/:ProjId", component: AddProposalComponent, canActivate: [AuthGuard]  },
  { path: "AllProposals/:ProjId", component: AllProposalsComponent, canActivate: [AuthGuard]  },
  { path: "adddeal/:ProjId/:teamId", component: AdddealComponent, canActivate: [AuthGuard]  },

  {
    path: "postComplain/:id",
    component: PostComplainsComponent,
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
    path: "profile/:id", component: HeaderComponent, children:
      [
        { path: "editSkills/:id", component: EditskillsComponent, outlet: 'modal' },
        { path: "addSkill/:id", component: AddSkillComponent, outlet: 'modal' },
        {
          path: "educations/:id", component: EducationalInfoComponent, children:
            [
              { path: "editEducation/:id/:gradYear", component: EditeducationalInfoComponent, outlet: 'modal' },
              { path: "addEducation", component: AddEducationComponent, outlet: 'modal' }
            ]
        },
        {
          path: "addSkill/:id",
          component: AddSkillComponent,
          outlet: 'modal'
        },
        {
          path: "educations/:id", component: EducationalInfoComponent,
          children:
            [
              {
                path: "editEducation/:id/:gradYear",
                component: EditeducationalInfoComponent,
                outlet: 'modal'
              },

              {
                path: "addEducation",
                component: AddEducationComponent,
                outlet: 'modal'
              }
            ]
        },
        {
          path: "portfolio/:id", component: ProjectsComponent,
          children:
            [
              // { path: ":id", component: ProjectsComponent },
              { path: "addPortofolio", component: AddPortfolioComponent }
            ]
        },
        {
          path: "experiences/:id", component: ExperienceComponent, children:
            [
              { path: "editExperience/:id/:startDate", component: EditexperienceComponent, outlet: 'modal' },
              { path: "addExperience", component: AddExperienceComponent, outlet: 'modal' }
            ]
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
              {
                path: "addCertificate",
                component: AddCertificateComponent,
                outlet: 'modal'
              }
            ]
        },

        {
          path: "personalInfo/:id", component: PersonalInfoComponent, children:
            [
              { path: "editpersonalInfo/:id", component: EditpersonalInfoComponent },
            ]
        },
        {
          path: "certificates/:id", component: CertificatesComponent, children: [

          ]
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
        {
          path: "addCertificate",
          component: AddCertificateComponent,
          outlet: 'modal'
        }
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

  { path: "userHome", component: ContainerComponent },

  { path: "**", component: ErrorComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
