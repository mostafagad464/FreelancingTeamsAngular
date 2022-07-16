import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Account } from 'src/app/_models/account';
import { Freelancer } from 'src/app/_models/freelancer';
import { User } from 'src/app/_models/user';
import { AuthService } from 'src/app/_services/auth.service';
import { UserProfileService } from 'src/app/_services/user-profile.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(public userserv: UserProfileService,
    public ar: ActivatedRoute,
    public authserv: AuthService,
    public router: Router,
    public usrservice: UserService,
    public activateRoute:ActivatedRoute
    ) {
    this.sub1 = this.ar.params.subscribe(x => {
      console.log(x);
      this.userId = x['id'];

      this.sub2 = this.userserv.getAccountInfoByid(x['id']).subscribe(a => {
        this.accountInfo = a
        console.log(this.accountInfo.user?.rate)
        // console.log(this.accountInfo.user?.freelancerNavigation?.specialization)
      })
    })

  }


  Image: File | null = null;
  imageurl: any;
  onFileChanged(event: any) {
    this.Image = <File>event.target.files[0];
    let fd = new FormData();
    const reader = new FileReader();
    reader.readAsDataURL(this.Image);
    reader.onload = (_event) => {
      this.imageurl = reader.result?.toString() ? reader.result.toString() : this.imageurl;
    }
    if (this.Image) {
      fd.append("files", this.Image, this.Image.name);
      // console.log(this.Image.name);

      this.usrservice.addImage(this.profileId, fd).subscribe(u => {
        this.accountInfo.user!.image = u.image;
      })


    }
  }


  wallet(){
    this.router.navigateByUrl("profile/" + this.userId + "/wallet/" + this.userId)

  }
  personalInfo() {
    this.router.navigateByUrl("profile/" + this.userId + "/personalInfo/" + this.userId)
  }
  portfolio() {
    this.router.navigateByUrl("profile/" + this.userId + "/portfolio/" + this.userId)
  }
  Experiences() {
    this.router.navigateByUrl("profile/" + this.userId + "/experiences/" + this.userId)
  }
  Certificates() {
    this.router.navigateByUrl("profile/" + this.userId + "/certificates/" + this.userId)
  }
  Educations() {
    this.router.navigateByUrl("profile/" + this.userId + "/educations/" + this.userId)
  }
  sub1: Subscription | null = null;
  sub2: Subscription | null = null;
  userId: any;
  profileId: any;
  urlId:number = 0;
  // userInfo:User=new User(0,new Date(),0,0,new Date(),"","","",0,true,"",true,false,0,0,true,new Freelancer(0,true,0,0,0,new Date(),0,0,"",0,0,0,0))
  //userInfo:User|null=null
  //userInfo = {} as User;
  accountInfo: Account = new Account(0, 0, "", "", "", "", "", "",
    new User(0, "", 0, 0, new Date().toISOString(), "", "", "", 0, true, "", true, false, null, null, true, null, null, null, null,
      new Freelancer(0, true, 0, 0, 0, null, new Date(), 0, 0, "", 0, 0, 0, 0, [], "")));

  //accountInfo ={} as Account;




  ngOnInit(): void {
    this.profileId = this.authserv.getCurrentUser()?.id;
    this.imageurl = "https://localhost:7152/api/Image?UserId=" + this.profileId;
    this.activateRoute.params.subscribe(a=>this.urlId = a['id']);
  }
  myTeam() {
    this.router.navigate(['team/showteams/', this.profileId]);
  }
  joinTeam() {
    this.router.navigate(['team/showteams']);
  }

}
