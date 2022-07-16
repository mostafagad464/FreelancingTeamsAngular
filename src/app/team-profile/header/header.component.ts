import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { numbers } from '@material/dialog';
import { Account } from 'src/app/_models/account';
import { Notifications } from 'src/app/_models/notifications';
import { Project } from 'src/app/_models/project';
import { TeamMember } from 'src/app/_models/team-member';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services/account.service';
import { AuthService } from 'src/app/_services/auth.service';
import { NotificationService } from 'src/app/_services/notification.service';
import { UserService } from 'src/app/_services/user.service';
import { Team } from '../../_models/team'
import { TeamMembersService } from '../team-members.service';
import { TeamProfileService } from '../team-profile.service';
import { ReviewsService } from './../../_services/reviews.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnChanges {

  noOfCpltdProj: number = 0;
  noOfRv: number = 0
  teamMembers: number[] = [];
  notification:Notifications = new Notifications(0, "", "", 0, false, false, new Date(1990, 1, 1));
  user:User=new User(0, null, 0 , 0, "", "" , "", null, 0, true, "", false, false, 0, 0, true, null, null, null, null, null);
  account:Account = new Account(0, null, "", "", "", "", "", "",null);

  constructor(public ac: ActivatedRoute,
    public teamServ: TeamProfileService,
    public freelancerServ: TeamMembersService,
    public ReviewsService: ReviewsService,
    private teamMembersService: TeamMembersService,
    private authService: AuthService,
    private userService: UserService,
    private notificationService:NotificationService, 
    private accountService:AccountService
  ) { }

  checkP = ""; //Your team's projects

  projects: Project[] = []

  projectsNames: string[] = []

  team: Team = {
    id: 0,
    logo: '',
    webSite: '',
    isVerfied: false,
    creationDate: new Date(1 / 1 / 2030),
    description: '',
    rate: 0,
    leaderId: 0,
    walletId: 0,
    name: '',
    specialization: '',
    deals: [],
    reviews: [],
    teamMembers: []
  }
  title = '';
  freelancerId: number = 0;

  teamMember: TeamMember = new TeamMember(0, 0, false);
  isMember: boolean = false;
  haveAccess: boolean = false;
  isFreelancer: boolean = false;
  isClient: boolean = false;
  public isAuthenticated$ = this.authService.isAuthenticated$;

  img = "../../../assets/images/1.png";
  desc = this.team.description;
  rate = 1;




  Search() {
  }

  check() {
    this.checkP = "Your team's projects";
  }

  Check() {
    this.title = "Freelancers in your team";
    this.freelancerServ.getTeamMembers(this.team.id).subscribe(a => {
      this.teamMembers = a;
    })
  }

  ngOnInit(): void {
    this.userService.getUser(this.freelancerId).subscribe(u=>{
      this.isClient = u.client;
      this.user = u;
      console.log( "Is Freelancer",this.isClient);
      console.log( u);
    })
    this.accountService.getAccount(this.freelancerId).subscribe(a=>{
      this.account = a
    })

    this.isAuthenticated$.subscribe(authenticated => {
    this.freelancerId = this.authService.getCurrentUser()?.id;
    this.ac.params.subscribe(a => {
      this.teamServ.getTeamById(a['id']).subscribe(a => {
        
        this.team = a;
        console.log(this.team);
        console.log(this.team.creationDate)
        console.log(this.team.name);
        this.Check();
        this.noOfCpltdProj = this.team.deals.filter(a => a.done == true).length;
        this.getReviews();
      })
        .add(() => {
          for (let i = 0; this.team.teamMembers.length; i++) {
            if (this.team.teamMembers[i].freelancerId == this.freelancerId) {
              this.isMember = true;
            }
            if (this.team.teamMembers[i].accessAllowed == true) {
              this.haveAccess = true;
            }
          }
        })
    })
    // this.userService.getUser(this.freelancerId).subscribe(u=>{
    //   this.isFreelancer = u.freelancer;
    //   console.log( "Is Freelancer",this.isFreelancer);
    //   console.log( u);
    // })

    });
    
    
    console.log("Is Freelancer", this.isFreelancer);
  }

  ngOnChanges(){
    // this.userService.getUser(this.authService.getCurrentUser()?.id).subscribe(u=>{
    //   this.isFreelancer = u.freelancer;
    //   console.log( "Is Freelancer",this.isFreelancer);
    // })
  }

  getReviews() {
    this.ReviewsService.getReviews().subscribe(r => {
      this.noOfRv = r.filter(a => a.rate > 4 && a.teamId == this.team.id).length;
    });
  }

  // Add Notification
  joinTeam(teamId: number) {
    this.teamMember.teamId = teamId;
    this.teamMember.freelancerId = this.freelancerId;
    this.teamMembersService.addTeamMember(this.teamMember).subscribe(
      a => console.log(a)
    )
  }

  requestJoinTeam(teamId: number)
  {
    // this.notification.date = Date();
    this.notification.description = ""+ this.account.firstName + " " + this.account.lastName + " wants to join your team: "+ this.team.name;
    this.notification.type = "j"
    this.notification.type_id = this.freelancerId;
    this.notificationService.postTeamNotification(teamId, this.notification).subscribe(
      n=>{
        console.log(n);
      }
    )
  }

  async checkfreelancer() {
    await this.userService.getUser(this.authService.getCurrentUser()?.id).subscribe(u => {
      this.isFreelancer = u.freelancer;
      console.log("Is Freelancer", this.isFreelancer);
    })
  }

}
