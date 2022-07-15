import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule, 
    NgbModalModule,
  ],
  exports: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
 ]
})
export class LayoutModule { }
