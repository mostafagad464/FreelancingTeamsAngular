import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public isAuthenticated$ = this.AuthService.isAuthenticated$;

  constructor(public AuthService: AuthService) {
    this.isAuthenticated$.subscribe(authenticated => {})
   }

  ngOnInit(): void {
  }

}
