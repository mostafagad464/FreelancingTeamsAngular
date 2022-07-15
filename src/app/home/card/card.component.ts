import { Component, Input, OnInit } from '@angular/core';
import { Team } from 'src/app/_models/team';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() team!:Team;

  constructor() { }

  ngOnInit(): void {
    console.log(this.team.id)
  }

}
