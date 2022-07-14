import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proposal } from 'src/app/_models/proposal';
import { ProjectService } from 'src/app/_services/project.service';
import { ProposalService } from 'src/app/_services/proposal.service';

@Component({
  selector: 'app-all-proposals',
  templateUrl: './all-proposals.component.html',
  styleUrls: ['./all-proposals.component.css']
})
export class AllProposalsComponent implements OnInit {
  ProjId:number=0;
  Proposals:Proposal[]=[new Proposal(0,0,0,"",null,new Date(),"")];

  constructor(public router:Router,public ar:ActivatedRoute,public propSer:ProposalService) {
  }

  ngOnInit(): void {
    this.ProjId=this.ar.snapshot.params['ProjId']
    this.propSer.GetAllProposals().subscribe(a=>{
      a.forEach(element => {
        if(element.projectId ==this.ProjId)
        {
          this.Proposals.push(element);
          console.log(element);
        }

      });
      let pr=this.Proposals.splice(0, 1);

      console.log(this.Proposals);
      console.log(this.Proposals.length);

    })
  }
}
