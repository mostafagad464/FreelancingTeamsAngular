import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Account } from 'src/app/_models/account';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services/account.service';
import { AuthService } from 'src/app/_services/auth.service';
import { UserService } from 'src/app/_services/user.service';
import { MainInfoComponent } from '../main-info/main-info.component';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Freelancer } from 'src/app/_models/freelancer';

const helper = new JwtHelperService();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  /*** Popup */
  displayStyle='none';

  account: Account = new Account(0, null, "", "", "", "", "", "User",null);
  user:User = new User(0,null,0,0,(new Date()).toISOString(),"","",null,0,false,"",false,false,null,null,false,null,null,null,null,null);
  confirmPassword = "";
  message = "";
  showUN = false;   //Show User Name
  ButtonText = "Continue";
  isChecked = false;
  type = "";

  constructor(public AccountService: AccountService, public UserService: UserService, public modalService: NgbModal,public AuthService: AuthService) { }

  ngOnInit(): void {
    // this.displayStyle = 'block';
  }

  CheckUserName() {
    if (this.account.username != "") {
      this.AccountService.getUserName(this.account.username.substring(0, 1), this.account.username.substring(1)).subscribe(a => {
        if (this.account.username != a.userName) {
          this.message = "Invalid UserName";
        }
        else {
          this.message = "";
        }
      })
    }
    else {
      this.message = "User Name is required";
    }
  }

  Continue() {
    console.log(this.type);
    this.message = "";
    if (this.type == "") {
      this.message = "You should choose either you are a freelancer or a client";
    }
    else if (this.account.firstName == "") {
      this.message = "First Name is required";
    }
    else if (this.account.lastName == "") {
      this.message = "Last Name is required";
    }
    else if (this.account.email == "") {
      this.message = "Email is required";
    }
    else if (this.account.password == "") {
      this.message = "Password is required";
    }
    else if (this.account.password != this.confirmPassword) {
      this.message = "unmatched passwords";
    }
    else {
      if (!this.showUN) {
        this.AccountService.getUserName(this.account.firstName, this.account.lastName).subscribe(a => {
          this.account.username = a.userName;
          this.showUN = true;
          this.ButtonText = "Sign Up";
        })
      }
      else {
        if (this.isChecked) {
          console.log(this.account);
          this.AccountService.addAccount(this.account).subscribe(a => {
            console.log(a);
            this.user.id = a.id;
            this.user.client = (this.type == "f")? false : true;
            this.user.freelancer = !this.user.client; 
            console.log(this.user);
            this.UserService.addUser(this.user).subscribe(u=>{
              console.log(u);
              this.login(this.account.username, this.account.password);
            })
            
          })
        }
        
      }

    }
  }

  login(userName: string, pass: string){
    this.AuthService.login(userName,pass).subscribe(s=>{
      sessionStorage.setItem("access_token",s.token);
      const decodedToken = helper.decodeToken(s.token);
      const expirationDate = helper.getTokenExpirationDate(s.token);
      const isExpired = helper.isTokenExpired(s.token);
      console.log(s)
      console.log(decodedToken)
      console.log(expirationDate)
      console.log(isExpired)
      // this.openModal();
      this.displayStyle = 'block';
    },
    error=> {
      console.log(error.error)}
      );
  }

  openModal() {
    const modalRef = this.modalService.open(MainInfoComponent,
      {
        scrollable: false,
        windowClass: 'myCustomModalClass',
      });
    modalRef.result.then((result:any) => {
      console.log(result);
    }, (reason:any) => {
    });
  }

}
