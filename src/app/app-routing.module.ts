import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificatesComponent } from './_user/user-profile/certificates/certificates.component';
import { EditskillsComponent } from './_user/user-profile/editskills/editskills.component';
import { SkillsAndCertificateComponent } from './_user/user-profile/skills-and-certificate/skills-and-certificate.component';
import { SkillsComponent } from './_user/user-profile/skills/skills.component';

const routes: Routes = [
  {path:"skillsandcertificates",component:SkillsAndCertificateComponent,
  // children:[
  //   {path:"skills",component:SkillsComponent},
  //   {path:"certificates",component:CertificatesComponent}
  // ]
},

  {path:"editskills",component:EditskillsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
