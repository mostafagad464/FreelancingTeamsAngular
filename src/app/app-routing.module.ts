import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditpersonalInfoComponent } from './_user/user-profile/editpersonal-info/editpersonal-info.component';
import { PersonalInfoComponent } from './_user/user-profile/personal-info/personal-info.component';
import { UserProfileModule } from './_user/user-profile/user-profile.module';

const routes: Routes = [
  {path:"personalInfo/:id",component:PersonalInfoComponent},
  {path:"editpersonalInfo/:id",component:EditpersonalInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
