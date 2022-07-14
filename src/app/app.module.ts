
import { JwtModule } from "@auth0/angular-jwt";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountModule } from "./account/account.module";
import { CommonModule } from "@angular/common";
import { MessagesModule } from "./messages/messages.module";
import { JwtInterceptor } from "./_helpers/jwt.interceptor";
import { TeamProfileModule } from './team-profile/team-profile.module';
import { RatingModule } from 'primeng/rating';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReviewsModule } from './reviews/reviews.module';
import { RouterModule } from "@angular/router";
import { UserProfileModule } from './_user/user-profile/user-profile.module';
import { ShowMembersComponent } from "./team-profile/show-members/show-members.component";
import { SharedModule } from "./shared/shared.module";
import { HomeModule } from "./home/home.module";
import { FreelancersModule } from "./freelancers/freelancers.module";


export function tokenGetter() {
  return sessionStorage.getItem("access_token");
}


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HomeModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:7152"],
        disallowedRoutes: [],
      },
    }),
    UserProfileModule,
    FormsModule,
    ReactiveFormsModule,
    TeamProfileModule,
    RatingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatAutocompleteModule,
    ReviewsModule,
    BrowserModule,
    AccountModule,
    MessagesModule,
    RouterModule,
    FreelancersModule,

    
  ],
  providers: [
    {
      
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    // SearchPipe

  ],
  bootstrap: [AppComponent], 
  // exports:[
  //   SearchPipe
  // ]
})

export class AppModule { }
