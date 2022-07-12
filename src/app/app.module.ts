
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
import { TeamProfileComponent } from './team-profile/team-profile/team-profile.component';
import { RatingModule } from 'primeng/rating';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReviewsModule } from './reviews/reviews.module';
export function tokenGetter() {
  return sessionStorage.getItem("access_token");
}

import { UserProfileModule } from './_user/user-profile/user-profile.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
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
    AccountModule,
    MessagesModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
    AppRoutingModule,
    UserProfileModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TeamProfileModule,
    HttpClientModule,
    RatingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatAutocompleteModule,
    ReviewsModule
  ],
  bootstrap: [AppComponent]
});

export class AppModule { }
