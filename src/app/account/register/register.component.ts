import { Component, OnInit } from '@angular/core';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Account } from 'src/app/_models/account';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services/account.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  account: Account = new Account(0, null, "", "", "", "", "", "User", null);
  user:User = new User(0,null,0,0,(new Date()).toISOString(),"","","",0,false,"",false,false,null,null,false,null,null,null,null,null)
  confirmPassword = "";
  message = "";
  showUN = false;   //Show User Name
  ButtonText = "Continue";
  isChecked = false;
  type = "";

  constructor(public AccountService: AccountService, public UserService: UserService/*, public modalService: NgbModal*/) { }

  ngOnInit(): void {
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
            })
          })
        }
        
      }

    }
  }

  // openModal() {
  //   const modalRef = this.modalService.open(EditpersonalInfoComponent,
  //     {
  //       scrollable: true,
  //       windowClass: 'myCustomModalClass',
  //     });
  //   modalRef.result.then((result:any) => {
  //     console.log(result);
  //   }, (reason:any) => {
  //   });
  // }

}
