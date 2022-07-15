import { Component, OnInit } from '@angular/core';
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
  constructor(
    public modalService: NgbModal,
    public authserv:AuthService
   ) { }

  ngOnInit(): void {

    this.profileId=this.authserv.getCurrentUser()?.id;
    console.log(" this.profileId")
    console.log( this.profileId)
   


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
