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

const routes: Routes = [

 
  
  {path:"profile/:id",component:HeaderComponent,children:[
    {path:"portfolio/:id",component:ProjectsComponent},
    {path:"personalInfo/:id",component:PersonalInfoComponent,children:[
      {path:"editpersonalInfo/:id",component:EditpersonalInfoComponent
    }, 
    
    ]},

  ]},
  {path:"login", component:LoginComponent},
  { path: "", redirectTo: "login", pathMatch: "full" },
  {path:"register", component:RegisterComponent}
  ]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
