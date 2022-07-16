import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { MainInfoComponent } from './main-info/main-info.component';
import { SharedModule } from '../shared/shared.module';
import { LayoutModule } from '../Layout/layout.module';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    MainInfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule,
    LayoutModule
  ],
  exports:[
    LoginComponent,
    RegisterComponent,
    MainInfoComponent
  ]
})
export class AccountModule { }
