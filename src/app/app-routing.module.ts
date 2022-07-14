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
import { AddPortfolioComponent } from './_user/user-profile/add-portfolio/add-portfolio.component';


const routes: Routes = [
 {path:"projects",loadChildren:()=>import('./project/project.module').then(m=>m.ProjectModule)},
  {
    path: "profile/:id", component: HeaderComponent, children: [
      {
        path: "portfolio/:id", component: ProjectsComponent, children: [
          { path: "addPortofolio", component: AddPortfolioComponent }
        ]
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

          ]

      },
      {
        path: "personalInfo/:id", component: PersonalInfoComponent, children: [
          {
            path: "editpersonalInfo/:id", component: EditpersonalInfoComponent
          },
        ]
      }

    ]
  },

  { path: "login", component: LoginComponent },
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "register", component: RegisterComponent },
  { path: "skills/:id", component: SkillsComponent },
  { path: "skills/edit/:id", component: EditskillsComponent },
  { path:"chat", component: ChatComponent},
  { path:"chat/team/:id", component: TeamChatComponent},

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

      ]
      },
  { path: "login", component: LoginComponent },
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "register", component: RegisterComponent },
  { path: "skills/:id", component: SkillsComponent },
  { path: "skills/edit/:id", component: EditskillsComponent },
  {
    path: "freelancers", loadChildren:()=>import("./freelancers/freelancers.module").then(f=>f.FreelancersModule)

  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
