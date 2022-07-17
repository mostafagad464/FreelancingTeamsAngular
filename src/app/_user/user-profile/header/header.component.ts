import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Subscription } from 'rxjs';
import { Account } from 'src/app/_models/account';
import { Freelancer } from 'src/app/_models/freelancer';
import { Notifications } from 'src/app/_models/notifications';
import { Team } from 'src/app/_models/team';
import { User } from 'src/app/_models/user';
import { AuthService } from 'src/app/_services/auth.service';
import { NotificationService } from 'src/app/_services/notification.service';
import { TeamService } from 'src/app/_services/team.service';
import { UserProfileService } from 'src/app/_services/user-profile.service';
import { UserService } from 'src/app/_services/user.service';

const helper = new JwtHelperService();


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
    public activateRoute: ActivatedRoute,
    private notificationService: NotificationService,
    private teamService: TeamService
    )
    {    this.sub1 = this.ar.params.subscribe(x => {
    console.log(x);
    this.userId = x['id'];})}

    sub1: Subscription | null = null;
    sub2: Subscription | null = null;
    sub3: Subscription | null = null;
    userId: any;
    profileId: any;
    urlId: number = 0;
    savebio:number=0;
    
    Image: File | null = null;
    imageurl: any;
  


    accountInfo: Account = new Account(0, 0, "", "", "", "", "", "", null)
    userInfo = new User(0, "", 0, 0, new Date().toISOString(), "", "", "", 0, true, "", true, false, null, null, true, null, null, null, null,
      null);




    ngOnInit(): void {
      this.sub1 = this.ar.params.subscribe(x => {
        console.log(x);
        this.userId = x['id'];
  
        this.sub2 = this.userserv.getUserInfoByid(x['id']).subscribe(u => {
          this.userInfo = u;
  
          this.sub3 = this.userserv.getAccountInfoByid(x['id']).subscribe(a => {
            this.accountInfo = a
            console.log(this.accountInfo.user?.rate)
            let teamId = sessionStorage.getItem("team_id")?.toString();
            console.log("team id: ", teamId);
            this.teamService.getTeam(parseInt(teamId!)).subscribe(
              t => {
                this.team = t;
                console.log(this.team);
                console.log();
              }
            )
            this.profileId = this.authserv.getCurrentUser()?.id;
            this.imageurl = "https://localhost:7152/api/Image?UserId=" + this.profileId;
            this.activateRoute.params.subscribe(a => this.urlId = a['id']);
            
          })
        })
  
      })
      this.profileId = this.authserv.getCurrentUser()?.id;
      this.imageurl = "https://localhost:7152/api/Image?UserId=" + this.profileId;
      this.activateRoute.params.subscribe(a => this.urlId = a['id']);
    }
    


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







  

  


  wallet() {
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



 


 


  notification: Notifications = new Notifications(0, "", "", 0, false, false, new Date(2022, 7, 17));
  team: Team = new Team(0, null, "", false, new Date(), "", 0, 0, 0, "", "", [], [], []);


  myTeam() {
    this.router.navigate(['team/showteams/', this.profileId]);
  }
  joinTeam() {
    this.router.navigate(['team/showteams']);
  }

  AddToTeam() {
    console.log("team: ", this.team);
    console.log("notification: ", this.notification);
    console.log("user Id: ", this.userId);

    this.notification.description = "Team: " + this.team.name + " want you to join.";
    this.notification.type = "/team/teamProfile/";
    this.notification.type_id = this.team.id;
    console.log("notification: ", this.notification);

    this.notificationService.postAccountNotification(this.userId, this.notification).subscribe(
      n => console.log(n)
    )
  }

}

