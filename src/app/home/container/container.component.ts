import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Freelancer } from 'src/app/_models/freelancer';
import { Project } from 'src/app/_models/project';
import { Team } from 'src/app/_models/team';
import { User } from 'src/app/_models/user';
import { FreelancerService } from 'src/app/_services/freelancer.service';
import { TeamService } from 'src/app/_services/team.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  // teams:Team[]=[];
  @Input() teams!:Team[];
  sub1:Subscription|null=null;

  constructor(public teamServ:TeamService) { }

  ngOnInit(): void {



  }

}
