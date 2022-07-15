import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/_models/account';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  account:Account = new Account(0, null, "","","","","","",null);
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    console.log(this.account.id)
    console.log(this.authService.getCurrentUser()?.id)

    if(this.authService.getCurrentUser()?.id>0)
    {
      this.account.id = this.authService.getCurrentUser()?.id;
    }
    
  }
  logout()
  {
    this.authService.DeleteToken();
  }

}
