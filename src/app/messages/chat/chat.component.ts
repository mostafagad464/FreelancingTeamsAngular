import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/_models/account';
import { AccountMessage } from 'src/app/_models/account-message';
import { TeamFreelancerMessage } from 'src/app/_models/team-freelancer-message';
import { AccountService } from 'src/app/_services/account.service';
import { AuthService } from 'src/app/_services/auth.service';
import { ChatService } from 'src/app/_services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  UserId = 0;
  AccountsChats: AccountMessage[] = [];
  TeamChats: TeamFreelancerMessage[] = [];
  // Accounts: Account[] = [];
  Accounts:{ noOfMess: number; account: Account }[] =[];
  AccountChat: AccountMessage[] = [];
  account: Account = new Account(0,null,"","","","","","",null); // Account I am opening his chat
  accountmessage:AccountMessage=new AccountMessage(0,0,0,"","",false,false,null,null);

  constructor(public ChatService: ChatService, public AuthService: AuthService, public AccountService: AccountService) { }

  ngOnInit(): void {
    this.UserId = this.AuthService.getCurrentUser()?.id;

    this.ChatService.getAllAccountChats(this.UserId).subscribe(a => {
      this.AccountsChats = a;
      let Ids = this.AccountsChats.map(a => a.senderId).concat(this.AccountsChats.map(a => a.recieverId))
        .filter((elem, index, self) => index === self.indexOf(elem) && elem != this.UserId);
      for (let Id of Ids) {
        this.AccountService.getAccount(Id).subscribe(a => {
          this.Accounts.push({ "noOfMess": 0, "account": a });
          if(this.account.id == 0){
            this.account = a;
            this.ViewChat(this.account.id);
          }
        });
      }

    });
    this.ChatService.getAllTeamChats(this.UserId, "user").subscribe(a => {
      this.TeamChats = a;
      console.log(this.TeamChats);
    });

    this.ChatService.startConnection();

    //Add Listener to accounts Messages
    this.ChatService.hubConnection.on('AccountsMessaging', message => {
      console.log(message);
      if(message.senderId == this.account.id){
        this.AccountChat.push(message);
      }
      else{ 
        if(!this.Accounts.map(a=>a.account.id).includes(message.senderId)){  // first message from this user
          this.AccountService.getAccount(message.senderId).subscribe(a => {
            this.Accounts.push({ "noOfMess": 1, "account": a });
          });
        }
        else{ // not the first time to send message
          let n = this.Accounts.find(a => a.account.id == message.senderId)?.noOfMess || 0;
          this.Accounts.find(a => a.account.id == message.senderId)!.noOfMess = n + 1;
        }
      }
    })
  }

  ViewChat(UId: number) {
    this.ChatService.getAccountChat(this.UserId, UId).subscribe(a => {
      this.AccountChat = a;
      console.log(a);
      this.account = this.Accounts.filter(a=>a.account.id == UId)[0].account;
      this.Accounts.find(a => a.account.id == UId)!.noOfMess = 0;
    });
  }

  SengMessage(){
    this.accountmessage.senderId = this.UserId;
    this.accountmessage.recieverId = this.account.id;
    this.accountmessage.date = new Date().toISOString();
    console.log(this.accountmessage.date);
    this.ChatService.sendAccountMessage(this.accountmessage).subscribe(a=>{
      this.AccountChat.push(a);
      this.accountmessage.message="";
    })
  }


}
