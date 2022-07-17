import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/_models/project';

@Component({
  selector: 'app-container-freelancer',
  templateUrl: './container-freelancer.component.html',
  styleUrls: ['./container-freelancer.component.css']
})
export class ContainerFreelancerComponent implements OnInit {
  @Input() projects!:Project[];

  constructor() { }

  ngOnInit(): void {
  }

}
