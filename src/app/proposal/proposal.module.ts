import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProposalsComponent } from './all-proposals/all-proposals.component';
import { AddProposalComponent } from './add-proposal/add-proposal.component';



@NgModule({
  declarations: [
    AllProposalsComponent,
    AddProposalComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProposalModule { }
