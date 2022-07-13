import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/_models/account';
import { AccountMessage } from 'src/app/_models/account-message';
import { Team } from 'src/app/_models/team';
import { TeamFreelancerMessage } from 'src/app/_models/team-freelancer-message';
import { AccountService } from 'src/app/_services/account.service';
import { AuthService } from 'src/app/_services/auth.service';
import { ChatService } from 'src/app/_services/chat.service';
import { TeamService } from 'src/app/_services/team.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {


  ChatsList: { name: string, id: number, type: string, lastMessDate: string, lastMess:string, noOfUnRead:number }[] = [];


  type = "a";
  UserId = 0;
  AccountsChats: AccountMessage[] = [];
  TeamChats: TeamFreelancerMessage[] = [];
  // Accounts: Account[] = [];
  Accounts: { noOfMess: number; account: Account }[] = [];
  Teams: { noOfMess: number; team: Team }[] = [];
  AccountChat: AccountMessage[] = [];
  TeamChat: TeamFreelancerMessage[] = [];
  account: Account = new Account(0, null, "", "", "", "", "", "", null); // Account I am opening his chat
  team: Team = new Team(0, null, "", false, new Date(), "", 0, 0, 0, "", [], [], []); // Team I am opening his chat
  accountmessage: AccountMessage = new AccountMessage(0, 0, 0, "", "", false, false, null, null);
  teammessage: TeamFreelancerMessage = new TeamFreelancerMessage(0, 0, 0, "", "", "u", false, false, null, null);

  constructor(public ChatService: ChatService, public AuthService: AuthService, public AccountService: AccountService, public TeamService: TeamService) { }

  ngOnInit(): void {
    this.UserId = this.AuthService.getCurrentUser()?.id;

    this.ChatService.getAllAccountChats(this.UserId).subscribe(a => {
      this.AccountsChats = a;
      let Ids = this.AccountsChats.map(a => a.senderId).concat(this.AccountsChats.map(a => a.recieverId))
        .filter((elem, index, self) => index === self.indexOf(elem) && elem != this.UserId);
      for (let Id of Ids) {
        this.AccountService.getAccount(Id).subscribe(a => {
          /********************************************************* */
          let d =  this.AccountsChats.filter(e => (e.senderId == this.UserId || e.recieverId == this.UserId) && (e.senderId == Id || e.recieverId == Id) ).sort((d1, d2) => (d1.date > d2.date) ? -1 : ((d1.date < d2.date) ? 1 : 0))[0].date;
          let mess = this.AccountsChats.filter(e => (e.senderId == this.UserId || e.recieverId == this.UserId) && (e.senderId == Id || e.recieverId == Id) ).sort((d1, d2) => (d1.date > d2.date) ? -1 : ((d1.date < d2.date) ? 1 : 0))[0].message
          let u = this.AccountsChats.filter(e => e.recieverId == this.UserId && e.senderId == Id && e.read == false).length;
          this.ChatsList.push({
            "name": a.firstName + " " + a.lastName,
            "id": a.id,
            "type": "a",
            "lastMessDate":d,
            "lastMess": mess.substring(0,25).concat( (mess.length> 25 )?" ...":""),
            "noOfUnRead": u
          })
          this.ChatsList = this.ChatsList.sort((m1, m2) => (m1.lastMessDate > m2.lastMessDate) ? -1 : (m1.lastMessDate < m1.lastMessDate) ? 1 : 0);
          console.log("chat list account",this.ChatsList);
          /********************************************************** */
          this.Accounts.push({ "noOfMess": 0, "account": a });
          if (this.account.id == 0) {
            this.account = a;
            this.ViewChat(this.account.id, 'a');
          }
        });
      }

    });
    this.ChatService.getAllTeamChats(this.UserId, "user").subscribe(a => {
      this.TeamChats = a;
      console.log(this.TeamChats);
      if (this.TeamChats.length > 0) {
        let TeamsIds = this.TeamChats.map(a => a.teamId).filter((elem, index, self) => index === self.indexOf(elem));
        for (let TeamId of TeamsIds) {
          this.TeamService.getTeam(TeamId).subscribe(t => {
          /********************************************************* */
          let d = this.TeamChats.filter(e => e.userId == this.UserId  && e.teamId == TeamId ).sort((d1, d2) => (d1.date > d2.date) ? -1 : ((d1.date < d2.date) ? 1 : 0))[0].date;
          let mess = this.TeamChats.filter(e => e.userId == this.UserId  && e.teamId == TeamId ).sort((d1, d2) => (d1.date > d2.date) ? -1 : ((d1.date < d2.date) ? 1 : 0))[0].message;
          let u = this.TeamChats.filter(e=> e.teamId == TeamId && e.userId == this.UserId && e.sender == 't' && e.read == false).length
          this.ChatsList.push({
            "name": t.name,
            "id": t.id,
            "type": "t",
            "lastMessDate": d,
            "lastMess": mess.substring(0,25).concat( (mess.length> 25 )?" ...":""),
            "noOfUnRead" : u
          })
          this.ChatsList = this.ChatsList.sort((m1, m2) => (m1.lastMessDate > m2.lastMessDate) ? -1 : (m1.lastMessDate < m1.lastMessDate) ? 1 : 0);
          console.log("chat list team",this.ChatsList);
          /********************************************************** */
            this.Teams.push({ "noOfMess": 0, "team": t });
          })
        }
      }
    });

    this.ChatService.startConnection();

    //Add Listener to accounts Messages
    this.ChatService.hubConnection.on('AccountsMessaging', message => {
      console.log(message);
      if (message.senderId == this.account.id && this.type == 'a') {
        this.AccountChat.push(message);
        // Update messages to read
        this.ChatService.UpdateAccountChat(message.senderId, this.UserId).subscribe(a=>{
          console.log(a);
        });
        this.ChatsList.find(a => a.id == message.senderId && a.type == 'a')!.lastMess = message.message;
        this.ChatsList.find(a => a.id == message.senderId && a.type == 'a')!.lastMessDate = message.date;
        this.ChatsList = this.ChatsList.sort((m1, m2) => (m1.lastMessDate > m2.lastMessDate) ? -1 : (m1.lastMessDate < m1.lastMessDate) ? 1 : 0);
        }
      else {
        if (!this.Accounts.map(a => a.account.id).includes(message.senderId)) {  // first message from this user
          this.AccountService.getAccount(message.senderId).subscribe(a => {
            this.Accounts.push({ "noOfMess": 1, "account": a });

            /**************************************************************************** */
            this.ChatsList.push({
              "name": a.firstName + " " + a.lastName,
              "id": a.id,
              "type": "a",
              "lastMessDate": message.date,
              "lastMess": message.message,
              "noOfUnRead": 1
            })
            this.ChatsList = this.ChatsList.sort((m1, m2) => (m1.lastMessDate > m2.lastMessDate) ? -1 : (m1.lastMessDate < m1.lastMessDate) ? 1 : 0);
            /********************************************************************************** */
          });
        }
        else { // not the first time to send message
          let n = this.Accounts.find(a => a.account.id == message.senderId)?.noOfMess || 0;
          this.Accounts.find(a => a.account.id == message.senderId)!.noOfMess = n + 1;
          /****************************************** */
          this.ChatsList.find(a => a.id == message.senderId && a.type == 'a')!.lastMess = message.message;
          this.ChatsList.find(a => a.id == message.senderId && a.type == 'a')!.lastMessDate = message.date;
          let m = this.ChatsList.find(a => a.id == message.senderId && a.type == 'a')?.noOfUnRead || 0;
          this.ChatsList.find(a => a.id == message.senderId && a.type == 'a')!.noOfUnRead = m + 1;
          
          this.ChatsList = this.ChatsList.sort((m1, m2) => (m1.lastMessDate > m2.lastMessDate) ? -1 : (m1.lastMessDate < m1.lastMessDate) ? 1 : 0);
          /*********************************************** */
        }
      }
    });

    //Add Listener to Team & account Messages
    this.ChatService.hubConnection.on("TeamsAndFreelancersMesseging", message => {
      console.log(message);
      if (message.teamId == this.team.id && this.type == 't') {
        this.TeamChat.push(message);
        // Update messages to read
        this.ChatService.UpdateTeamChat(message.TeamId, this.UserId,'t').subscribe(a=>{
          console.log(a);
        });
        this.ChatsList.find(a => a.id == message.teamId && a.type == 't')!.lastMess = message.message;
        this.ChatsList.find(a => a.id == message.teamId && a.type == 't')!.lastMessDate = message.date;
        this.ChatsList = this.ChatsList.sort((m1, m2) => (m1.lastMessDate > m2.lastMessDate) ? -1 : (m1.lastMessDate < m1.lastMessDate) ? 1 : 0);
        
      }
      else{
        if (!this.Teams.map(a => a.team.id).includes(message.teamId)) {  // first message from this user
          this.TeamService.getTeam(message.teamId).subscribe(a => {
            this.Teams.push({ "noOfMess": 1, "team": a });

            /**************************************************************************** */
            this.ChatsList.push({
              "name": a.name,
              "id": a.id,
              "type": "t",
              "lastMessDate": message.date,
              "lastMess": message.message,
              "noOfUnRead": 1
            })
            this.ChatsList = this.ChatsList.sort((m1, m2) => (m1.lastMessDate > m2.lastMessDate) ? -1 : (m1.lastMessDate < m1.lastMessDate) ? 1 : 0);
            /********************************************************************************** */
          });
        }
        else { // not the first time to send message
          let n = this.Teams.find(a => a.team.id == message.teamId)?.noOfMess || 0;
          this.Teams.find(a => a.team.id == message.teamId)!.noOfMess = n + 1;
          /****************************************** */
          this.ChatsList.find(a => a.id == message.teamId && a.type == 't')!.lastMess = message.message;
          this.ChatsList.find(a => a.id == message.teamId && a.type == 't')!.lastMessDate = message.date;
          let m = this.ChatsList.find(a => a.id == message.teamId && a.type == 't')?.noOfUnRead || 0;
          this.ChatsList.find(a => a.id == message.teamId && a.type == 't')!.noOfUnRead = m + 1;
          
          this.ChatsList = this.ChatsList.sort((m1, m2) => (m1.lastMessDate > m2.lastMessDate) ? -1 : (m1.lastMessDate < m1.lastMessDate) ? 1 : 0);
          /*********************************************** */
        }
      }
    });
  }

  ViewChat(UId: number, type: string) {     // type => a(account) | t(team)
    this.type = type;
    if (type == "a") {
      this.ChatService.getAccountChat(this.UserId, UId).subscribe(a => {
        this.AccountChat = a;
        this.account = this.Accounts.filter(a => a.account.id == UId)[0].account;
        this.Accounts.find(a => a.account.id == UId)!.noOfMess = 0;
      });
      // Update messages to read
      this.ChatService.UpdateAccountChat(UId, this.UserId).subscribe(a=>{
        console.log(a);
      });
    }
    else if (type == "t") {
      this.ChatService.getTeamChat(UId, this.UserId).subscribe(a => {
        this.TeamChat = a;
        this.team = this.Teams.filter(a => a.team.id == UId)[0].team;
        this.Teams.find(t => t.team.id == UId)!.noOfMess = 0;
      });
      // Update messages to read
      this.ChatService.UpdateTeamChat(UId,this.UserId,'t').subscribe(a=>{
        console.log(a);
      });
    }
    this.ChatsList.find(a=>a.id == UId && a.type == type)!.noOfUnRead = 0;
  }

  SendMessage() {
    if (this.type == "a") {
      this.accountmessage.senderId = this.UserId;
      this.accountmessage.recieverId = this.account.id;
      this.accountmessage.date = new Date().toISOString();
      console.log(this.accountmessage.date);
      this.ChatService.sendAccountMessage(this.accountmessage).subscribe(a => {
        this.AccountChat.push(a);
        this.accountmessage.message = "";
        this.ChatsList.find(a=>a.id == this.account.id && this.type == 'a')!.lastMess = a.message;
        this.ChatsList.find(a=>a.id == this.account.id && this.type == 'a')!.lastMessDate = a.date;
        this.ChatsList = this.ChatsList.sort((m1, m2) => (m1.lastMessDate > m2.lastMessDate) ? -1 : (m1.lastMessDate < m1.lastMessDate) ? 1 : 0);

      });
    }
    else if (this.type == "t") {
      this.teammessage.teamId = this.team.id;
      this.teammessage.userId = this.UserId;
      this.teammessage.sender = "u";
      this.teammessage.date = new Date().toISOString();
      this.teammessage.message = this.accountmessage.message;
      this.ChatService.sendTeamMessage(this.teammessage).subscribe(a => {
        this.TeamChat.push(a);
        this.accountmessage.message = "";
        this.ChatsList.find(a=>a.id == this.team.id && this.type == 't')!.lastMess = a.message;
        this.ChatsList.find(a=>a.id == this.team.id && this.type == 't')!.lastMessDate = a.date;
        this.ChatsList = this.ChatsList.sort((m1, m2) => (m1.lastMessDate > m2.lastMessDate) ? -1 : (m1.lastMessDate < m1.lastMessDate) ? 1 : 0);
      });
    }
  }


}
