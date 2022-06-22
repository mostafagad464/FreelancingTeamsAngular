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
    EditexperienceComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ExperienceComponent

  ]
})
export class UserProfileModule { }
