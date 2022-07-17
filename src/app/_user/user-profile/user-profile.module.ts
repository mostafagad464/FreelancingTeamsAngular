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
import { RouterModule } from '@angular/router';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { SkillsAndCertificateComponent } from './skills-and-certificate/skills-and-certificate.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { RatingModule } from 'primeng/rating';
import { EditCertificatesComponent } from './edit-certificates/edit-certificates.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AddCertificateComponent } from './add-certificate/add-certificate.component';
import { AddExperienceComponent } from './add-experience/add-experience.component';
import { FormsModule } from '@angular/forms';
import { AddPortfolioComponent } from './add-portfolio/add-portfolio.component';
import { AddSkillComponent } from './add-skill/add-skill.component';
import { AddEducationComponent } from './add-education/add-education.component';
import { PostComplainsComponent } from './post-complains/post-complains.component';
import { BioComponent } from './bio/bio.component';



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
    CertificatesComponent,
    EditCertificatesComponent,
    AddCertificateComponent,
    AddExperienceComponent,
    AddPortfolioComponent,
    AddSkillComponent,
    AddEducationComponent,
    PostComplainsComponent,
    BioComponent
  ],
  imports: [
    CommonModule, 
    RouterModule, 
    NgbModalModule,
    FormsModule,
    RatingModule
  ],
  exports: [
    ExperienceComponent, 
    PersonalInfoComponent, 
    HeaderComponent, 
    ProjectsComponent, 
    SidebarComponent,
    CommonModule, 
    RouterModule, 
    FormsModule, 
    RatingModule, 
    AppRoutingModule, 
    NgbModalModule,
    SkillsComponent,
    CertificatesComponent,
    SkillsAndCertificateComponent,
    EditskillsComponent,
    EditCertificatesComponent,
    AddCertificateComponent,
    AddExperienceComponent,
    AddSkillComponent,
    EducationalInfoComponent,
    EditeducationalInfoComponent,
    AddEducationComponent,
    PostComplainsComponent
  ]
})
export class UserProfileModule { }
