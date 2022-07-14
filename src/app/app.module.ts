
import { JwtModule } from "@auth0/angular-jwt";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountModule } from "./account/account.module";
import { CommonModule } from '@angular/common';
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
import { AddProposalComponent } from './proposal/add-proposal/add-proposal.component';
import { ProposalModule } from "./proposal/proposal.module";
import { AdddealComponent } from './deal/adddeal/adddeal.component';
import { DealModule } from "./deal/deal.module";

export function tokenGetter() {
  return sessionStorage.getItem("access_token");
}


@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [

    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    ProposalModule,
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
    DealModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
