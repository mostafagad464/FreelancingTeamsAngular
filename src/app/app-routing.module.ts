import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

  },
  // { path: "experiences/edit/:id", component: EditexperienceComponent },
  // { path: ':id', component: YourComponent, outlet: 'modal' },
  // {path:"certificates/add/:id",component:AddCertificateComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
