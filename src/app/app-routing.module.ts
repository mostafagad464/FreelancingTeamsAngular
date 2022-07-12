import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditpersonalInfoComponent } from './_user/user-profile/editpersonal-info/editpersonal-info.component';
import { EditprojectsComponent } from './_user/user-profile/editprojects/editprojects.component';
import { HeaderComponent } from './_user/user-profile/header/header.component';
import { PersonalInfoComponent } from './_user/user-profile/personal-info/personal-info.component';
import { ProjectsComponent } from './_user/user-profile/projects/projects.component';
import { UserProfileModule } from './_user/user-profile/user-profile.module';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { TeamProfileComponent } from './team-profile/team-profile/team-profile.component';
import { AddCertificateComponent } from './_user/user-profile/add-certificate/add-certificate.component';
import { AddExperienceComponent } from './_user/user-profile/add-experience/add-experience.component';
import { CertificatesComponent } from './_user/user-profile/certificates/certificates.component';
import { EditCertificatesComponent } from './_user/user-profile/edit-certificates/edit-certificates.component';
import { EditexperienceComponent } from './_user/user-profile/editexperience/editexperience.component';
import { EditskillsComponent } from './_user/user-profile/editskills/editskills.component';
import { ExperienceComponent } from './_user/user-profile/experience/experience.component';
import { SkillsAndCertificateComponent } from './_user/user-profile/skills-and-certificate/skills-and-certificate.component';
import { SkillsComponent } from './_user/user-profile/skills/skills.component';


const routes: Routes = [
  {
    path: "profile/:id", component: HeaderComponent, children: [
      { path: "portfolio/:id", component: ProjectsComponent },
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

  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
