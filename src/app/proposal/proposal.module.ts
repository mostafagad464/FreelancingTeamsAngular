import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AllProposalsComponent } from './all-proposals/all-proposals.component';
import { AddProposalComponent } from './add-proposal/add-proposal.component';
import { BrowserModule } from '@angular/platform-browser'
import { DealModule } from '../deal/deal.module';



@NgModule({
  declarations: [
    AllProposalsComponent,AddProposalComponent
  ],
  imports: [
    CommonModule,RouterModule,FormsModule,DealModule
  ],
  exports:[ AllProposalsComponent,AddProposalComponent]
})
export class ProposalModule { }
