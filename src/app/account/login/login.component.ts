import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from '@angular/router';

const helper = new JwtHelperService();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string = '';
  password: string = '';
  message = "";
  pass = "password";
  fa = "fa-eye";

  constructor(public AuthService: AuthService, public router: Router) { }

  ngOnInit(): void {
  }
  login() {
    this.AuthService.login(this.userName, this.password).subscribe(s => {
      sessionStorage.setItem("access_token", s.token);
      const decodedToken = helper.decodeToken(s.token);
      const expirationDate = helper.getTokenExpirationDate(s.token);
      const isExpired = helper.isTokenExpired(s.token);
      console.log(s)
      console.log(decodedToken.Id)
      console.log(expirationDate)
      console.log(isExpired)
      if (this.AuthService.redirectUrl != "") {
        this.router.navigate([this.AuthService.redirectUrl]);
        this.AuthService.redirectUrl = "";
      }
      else
      {
        this.router.navigateByUrl("/userHome")
      }

    },
      error => {
        this.message = "Username and password incorrect";
        this.userName = '';
        this.password = '';
        console.log(error.error)
      }
    );
  }

}
