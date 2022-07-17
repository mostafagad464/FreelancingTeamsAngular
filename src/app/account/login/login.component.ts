import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from '@angular/router';
import { User } from 'src/app/_models/user';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/_services/user.service';
import { UserProfileService } from 'src/app/_services/user-profile.service';

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
  userInfo = new User(0, "", 0, 0, new Date().toISOString(), "", "", "", 0, true, "", true, false, null, null, true, null, null, null, null,
  null);
  userId:any;
  sub1:Subscription|null=null;
  

  constructor(public AuthService: AuthService, public router: Router,public useeserv:UserProfileService) { }

  ngOnInit(): void {


  }
  login() {
    this.AuthService.login(this.userName, this.password).subscribe(s => {
      sessionStorage.setItem("access_token", s.token);
      const decodedToken = helper.decodeToken(s.token);
      const expirationDate = helper.getTokenExpirationDate(s.token);
      const isExpired = helper.isTokenExpired(s.token);
      this.AuthService.logIn();
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
        this.userId=this.AuthService.getCurrentUser()?.id;
        this.sub1=this.useeserv.getUserInfoByid(this.userId).subscribe(u=>
          {
            this.userInfo=u;
            if(this.userInfo.freelancer){
              this.router.navigateByUrl("/freelancerHome")
    
            }
            
            else  if(this.userInfo.client)
            {this.router.navigateByUrl("/userHome")}

    
          }
        )

      }


      if(this.AuthService.getCurrentUser()?.role == "admin"){
        this.router.navigateByUrl("/admin/adminProfile/"+this.AuthService.getCurrentUser()?.id);
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
