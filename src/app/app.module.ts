import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { LayoutModule } from './Layout/layout.module';

import { UserProfileModule } from './_user/user-profile/user-profile.module';
=======
import { TeamProfileModule } from './team-profile/team-profile.module';
import { TeamProfileComponent } from './team-profile/team-profile/team-profile.component';
import { HttpClientModule } from '@angular/common/http';
import { RatingModule } from 'primeng/rating';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReviewsModule } from './reviews/reviews.module';
>>>>>>> FreelancingTeamsAngular/EMBranch

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    UserProfileModule,
    HttpClientModule,
    LayoutModule
=======
    FormsModule,
    ReactiveFormsModule,
    TeamProfileModule,
    HttpClientModule,
    RatingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatAutocompleteModule,
    ReviewsModule
>>>>>>> FreelancingTeamsAngular/EMBranch
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
