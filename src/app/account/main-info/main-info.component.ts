import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/_services/account.service';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Account } from 'src/app/_models/account';
import { UserService } from 'src/app/_services/user.service';
import { User } from 'src/app/_models/user';
import { CountriesService } from 'src/app/_services/countries.service';
import { Freelancer } from 'src/app/_models/freelancer';
import { Router } from '@angular/router';

const helper = new JwtHelperService();

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.css']
})
export class MainInfoComponent implements OnInit {

  account: Account = new Account(0, null, "", "", "", "", "", "", null);
  user: User = new User(0, null, 0, 0, (new Date()).toISOString(), "", "", null, 0, false, "", false, false, null, null, false, null, null, null, null, null);
  bio_Pic = false;
  Image: File | null = null;
  imageurl = "http://ssl.gstatic.com/accounts/ui/avatar_2x.png";
  countries: string[] = [];
  states: string[] = [];
  code: string = "";
  n = 1;


  constructor(public AccountService: AccountService,
    public UserService: UserService,
    public CountriesService: CountriesService,
    private router: Router) { }

  ngOnInit(): void {
    let id = helper.decodeToken(sessionStorage.getItem("access_token")?.toString()).Id;
    console.log(id);
    this.AccountService.getAccount(id).subscribe(a => {
      this.account = a;
    }, err => console.log(err));
    this.UserService.getUser(parseInt(id)).subscribe(u => {
      this.user = u;
      this.user.birthDate = this.user.birthDate?.split('T')[0] ? this.user.birthDate?.split('T')[0] : null;
      if (this.user.country != null) {
        this.CountriesService.getCountryDialCode(this.user.country).subscribe(d => {
          this.code = d.data.dial_code;
        }, err => console.log(err))
      }
    }, error => console.log(error));
    this.CountriesService.getAllCountries().subscribe(c => {
      for (const country of c) {
        this.countries.push(country.name);
      }
    }, err => console.log(err));
  }

  LoadStates(E: any) {
    this.CountriesService.getCountryCities(E.target.value).subscribe(c => {
      this.states = c.data;
    }, err => console.log(err));
    this.CountriesService.getCountryDialCode(E.target.value).subscribe(d => {
      this.code = d.data.dial_code;
    }, err => console.log(err))
  }

  AddImg(I: any) {
    if (I.target.value) {
      this.Image = <File>I.target.files[0];

      const reader = new FileReader();
      reader.readAsDataURL(this.Image);
      reader.onload = (_event) => {
        this.imageurl = reader.result?.toString() ? reader.result.toString() : this.imageurl;
      }
    }
  }

  UpdateInfo() {
    if (!this.bio_Pic) {
      this.AccountService.EditAccount(this.account).subscribe(a => {
        this.account = a;
        this.UserService.EditUser(this.user).subscribe(u => {
          this.user = u;
          this.bio_Pic = true;
          console.log(this.account);
          console.log(this.user);
          // this.router.navigate(['profile/', this.user.id]);
        })
      })
    }
    else {
      console.log(this.user);
      this.UserService.EditUser(this.user).subscribe(u => {
        this.user = u;
        console.log(this.user);
        let fd = new FormData();
        if (this.Image) {
          fd.append("files", this.Image, this.Image.name);
          console.log(this.Image.name);

          this.UserService.addImage(this.user.id, fd).subscribe(u => {
            this.user.image = u.image;
            // this.router.navigate(['profile/', this.user.id]);
          })
          console.log(this.account);
          console.log(this.user);
        }
      })
    }
    // this.router.navigate(['profile/',this.user.id]);

  }

  GoToProfile() {
    // this.Router.navigate(['']);
  }
}
