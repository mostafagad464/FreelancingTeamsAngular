import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/_models/project';

@Component({
  selector: 'app-card-freelancer',
  templateUrl: './card-freelancer.component.html',
  styleUrls: ['./card-freelancer.component.css']
})
export class CardFreelancerComponent implements OnInit {
  @Input() project!:Project;

  constructor() { }

  ngOnInit(): void {
  }

}
