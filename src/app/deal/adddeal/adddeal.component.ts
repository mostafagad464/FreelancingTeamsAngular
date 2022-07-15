import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Deal } from 'src/app/_models/deal';
import { AuthService } from 'src/app/_services/auth.service';
import { DealService } from 'src/app/_services/deal.service';
import { ProposalService } from 'src/app/_services/proposal.service';

@Component({
  selector: 'app-adddeal',
  templateUrl: './adddeal.component.html',
  styleUrls: ['./adddeal.component.css'],
})
export class AdddealComponent implements OnInit {
  constructor(
    public dealSer: DealService,
    public router: Router,
    public ar: ActivatedRoute,
    public propSer: ProposalService,
    public auth: AuthService,

  ) {}
  ClientId: number = 1;
  DeliverDate: Date = new Date();
  deal: Deal = new Deal(this.ClientId, 0, 0, 0, 0, false);
  // Add(){
  //   this.dealSer.AddNewDeal().subscribe(a=>{
  //     console.log("Added");
  //     console.log(a.clientId);

  //   })
  // }
  // edit(){
  //   this.dealSer.EditDeal(this.deal).subscribe(a=>{
  //     console.log(a.duration);
  //     console.log("Edited");

  //   })

  // }
  // { path: "adddeal/:ProjId/:TeamId", component: AdddealComponent  },

  ngOnInit(): void {
    this.ClientId= this.deal.clientId= this.auth.getCurrentUser()?.id;
    console.log("user ID : "+this.ClientId);

    this.deal.projectId = this.ar.snapshot.params['ProjId'];
    this.deal.teamtId = this.ar.snapshot.params['TeamId'];
    this.propSer.GetAllProposals().subscribe((a) => {
      a.forEach((element) => {
        if (
          element.projectId == this.deal.projectId &&
          element.teamId == this.deal.teamtId
        ) {
          this.deal.duration = Number(element.duration);
          if (element.money != null) this.deal.money = element.money;
        }
      });
    });
  }


  //-----------------
  CalcDuration() {
    var today: Date = new Date();
    this.deal.duration = this.getDayDiff(
      new Date(today),
      new Date(this.DeliverDate)
    );
    // console.log(durationstring);
  }
  //-------------------
  getDayDiff(startDate: Date, endDate: Date): number {
    const msInDay = 24 * 60 * 60 * 1000;

    return Math.round(Math.abs(Number(endDate) - Number(startDate)) / msInDay);
  }
}
