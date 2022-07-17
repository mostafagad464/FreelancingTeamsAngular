import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Account } from 'src/app/_models/account';
import { Notifications } from 'src/app/_models/notifications';
import { Team } from 'src/app/_models/team';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services/account.service';
import { AuthService } from 'src/app/_services/auth.service';
import { ChatService } from 'src/app/_services/chat.service';
import { NotificationService } from 'src/app/_services/notification.service';
import { TeamService } from 'src/app/_services/team.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {

  public isAuthenticated$ = this.AuthService.isAuthenticated$;
  user: User = new User(0, null, 0, 0, "", "", "", "", 0, false, "", false, false, null, null, false, null, null, null, null, null)
  account: Account = new Account(0, null, "", "", "", "", "", "", null);
  teams: Team[] = [];
  teamSelected: boolean = false;
  name = "";
  imgUrl = "";
  NoOfNotifications = 0;
  NoOfMessages = 0;
  ListOfNotifications: Notifications[] = [];
  ViewAll = false;
  text = 'See more';


  constructor(public AuthService: AuthService, public UserService: UserService, 
    public TeamService: TeamService, public AccountService: AccountService, 
    public NotificationService: NotificationService, public ChatService : ChatService) { }


  ngOnInit(): void {
    this.getNotifications(this.AuthService.getCurrentUser()?.id);

    this.isAuthenticated$.subscribe(authenticated => {
      if (authenticated) {
        this.user.id = this.AuthService.getCurrentUser()?.id;
        this.UserService.getUser(this.AuthService.getCurrentUser()?.id).subscribe(u => {
          this.user = u;
          if (this.user.freelancer) {
            this.teams = [];
            for (let teamMember of this.user.freelancerNavigation!.teamMembers) {
              this.TeamService.getTeam(teamMember.teamId).subscribe(t => {
                this.teams.push(t);
                console.log(this.teams)
              })
            }
          }
        });
        this.AccountService.getAccount(this.AuthService.getCurrentUser()?.id).subscribe(account => {
          this.account = account;
          this.name = account.firstName + " " + account.lastName;
        })
      }
      this.NotificationService.getNotIficationsCount(this.AuthService.getCurrentUser()?.id).subscribe(notNo => {
        this.NoOfNotifications = notNo.count;
      });
      this.ChatService.getAccountMessagesCount(this.AuthService.getCurrentUser()?.id).subscribe(messNo => {
        this.NoOfMessages = messNo.count;
      });

      this.NotificationsListener();
      this.MessagesListener();
  
      this.getNotifications(this.AuthService.getCurrentUser()?.id);
    });

  }

  Switch(name: string, id: number) {
    sessionStorage.setItem("team_id", id.toString());
    this.name = name
  }
  logout() {
    this.AuthService.DeleteToken();
  }


  NotificationsListener() {
    // Hub connection
    this.NotificationService.startConnection();

    //Notification Listener
    this.NotificationService.hubConnection.on("Notify", notification => {
      console.log(notification);
      this.NotificationService.getNotIficationsCount(this.AuthService.getCurrentUser()?.id).subscribe(notNo => {
        this.NoOfNotifications = notNo.count;
      });
      this.getNotifications(this.AuthService.getCurrentUser()?.id);
    });
  }


  MessagesListener() {
    //Hub Connection
    this.ChatService.startConnection();

    this.ChatService.hubConnection.on('AccountsMessaging', message => {
      this.ChatService.getAccountMessagesCount(this.AuthService.getCurrentUser()?.id).subscribe(messNo => {
        this.NoOfMessages = messNo.count;
      });
    });
    this.ChatService.hubConnection.on("TeamsAndFreelancersMesseging", message => {
      this.ChatService.getAccountMessagesCount(this.AuthService.getCurrentUser()?.id).subscribe(messNo => {
        this.NoOfMessages = messNo.count;
      });
    });
    this.ChatService.hubConnection.on("AccountMessagesUpdate", message => {
      console.log("here");
      this.ChatService.getAccountMessagesCount(this.AuthService.getCurrentUser()?.id).subscribe(messNo => {
        this.NoOfMessages = messNo.count;
      });
    });
  }


  async getNotifications(id:number){
    await this.NotificationService.getAccountNotifications(id).subscribe(notifications=>{

      this.ListOfNotifications = notifications;
      this.ListOfNotifications = this.ListOfNotifications.sort((m1, m2) => (m1.date > m2.date) ? -1 : (m1.date < m1.date) ? 1 : 0);
      console.log("Notification List ", this.ListOfNotifications);
    })
  }


  MarkAsRead() {
    this.NoOfNotifications = 0;
    this.NotificationService.UpdateAccountNotification(this.AuthService.getCurrentUser()?.id).subscribe(notifications => {
      this.getNotifications(this.AuthService.getCurrentUser()?.id);
    })
  }

  /****
   * Notifications types :
   *    proposal
   */

  Accept(type: string,type_id: number){

  }
  
  Decline(type: string,type_id: number){

  }


}
