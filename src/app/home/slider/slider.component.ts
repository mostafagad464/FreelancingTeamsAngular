import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  userId:any;

  constructor(public authserv:AuthService) { }

  ngOnInit(): void {
    this.userId=this.authserv.getCurrentUser()?.id;
  }

}
