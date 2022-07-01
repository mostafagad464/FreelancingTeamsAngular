import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { EducationalInfoComponent } from './educational-info/educational-info.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { EditprojectsComponent } from './editprojects/editprojects.component';
import { EditskillsComponent } from './editskills/editskills.component';
import { EditeducationalInfoComponent } from './editeducational-info/editeducational-info.component';
import { EditpersonalInfoComponent } from './editpersonal-info/editpersonal-info.component';
import { ExperienceComponent } from './experience/experience.component';
import { EditexperienceComponent } from './editexperience/editexperience.component';
import { SkillsAndCertificateComponent } from './skills-and-certificate/skills-and-certificate.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PersonalInfoComponent,
    EducationalInfoComponent,
    HeaderComponent,
    SidebarComponent,
    SkillsComponent,
    ProjectsComponent,
    EditprojectsComponent,
    EditskillsComponent,
    EditeducationalInfoComponent,
    EditpersonalInfoComponent,
    ExperienceComponent,
    EditexperienceComponent,
    SkillsAndCertificateComponent,
    CertificatesComponent
  ],
  imports: [
    CommonModule,RouterModule,FormsModule
  ],
  exports: [
    ExperienceComponent,
    SkillsComponent,
    CertificatesComponent, 
    SkillsAndCertificateComponent,
    EditskillsComponent
   

  ]
})
export class UserProfileModule { }
