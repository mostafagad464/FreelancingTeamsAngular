import { Component, OnInit } from '@angular/core';

import { Account } from 'src/app/_models/account';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/_services/auth.service';
import { UserProfileService } from 'src/app/_services/user-profile.service';
import { PostComplainsComponent } from 'src/app/_user/user-profile/post-complains/post-complains.component';


@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  profileId:Number=0;

  account:Account = new Account(0, null, "","","","","","",null);
  constructor(private authService:AuthService, public modalService: NgbModal,
    ) { }

  ngOnInit(): void {
    console.log(this.account.id)
    console.log(this.authService.getCurrentUser()?.id)

    if(this.authService.getCurrentUser()?.id>0)
    {
      this.account.id = this.authService.getCurrentUser()?.id;
    }
        this.profileId=this.authService.getCurrentUser()?.id;
    console.log(" this.profileId")
    console.log( this.profileId)
    
  }
  logout()
  {
    this.authService.DeleteToken();
  }


  // openModalAdd(){

  //   const modalRef = this.modalService.open(PostComplainsComponent,
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
