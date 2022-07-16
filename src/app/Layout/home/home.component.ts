import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public isAuthenticated$ = this.authService.isAuthenticated$;

  constructor(private authService: AuthService) {
    this.isAuthenticated$.subscribe(authenticated => { })
  }

  isFreelancer = false;

ngOnInit(): void {
  this.isFreelancer =  this.authService.getCurrentUser()?.id;
  // this.isFreelancer =  this.authService.userType()?.isFreelancer;

}

}
