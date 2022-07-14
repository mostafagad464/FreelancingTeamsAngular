import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMessage } from 'src/app/_models/imessage';
import { TeamFreelancerMessage } from 'src/app/_models/team-freelancer-message';
import { AccountService } from 'src/app/_services/account.service';
import { ChatService } from 'src/app/_services/chat.service';

@Component({
  selector: 'app-team-chat',
  templateUrl: './team-chat.component.html',
  styleUrls: ['./team-chat.component.css']
})
export class TeamChatComponent implements OnInit {

  s = "";
  teamId = 0;
  ChatsList: IMessage[] = [];
  openedchat : TeamFreelancerMessage[] = [];
  chattingUser: { name: string, id: number } = { "id": 0, "name": "" };
  newMessage: TeamFreelancerMessage = new TeamFreelancerMessage(0,0,0,"","","t",false,false,null,null)

  constructor(public ActivatedRoute:ActivatedRoute, public ChatService: ChatService, public AccountService: AccountService) { }

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(a=>{
      this.teamId = a['id'];
      this.newMessage.teamId = this.teamId;
      this.getAllMessages(this.teamId);
    });
    
    // Hub connection
    this.ChatService.startConnection();

    //Add Listener to Team & account Messages
    this.ChatService.hubConnection.on("TeamsAndFreelancersMesseging", message => {
      console.log(message);
      if (message.userId == this.chattingUser.id) {
        this.openedchat.unshift(message);
        this.ReadMessages();

        this.ChatsList.find(a => a.id == message.userId)!.lastMess = message.message;
        this.ChatsList.find(a => a.id == message.userId)!.lastMessDate = message.date;

        this.SortChatList();
      }
      else{
        if (!this.ChatsList.map(a => a.id).includes(message.userId)) {  // first message from this user
          
          this.AccountService.getAccount(message.userId).subscribe(account =>{
            this.ChatsList.push(new IMessage(account.firstName + " " + account.lastName, message.userId, "", message.date, message.message ,1));
            this.SortChatList();
          });

        }
        else { // not the first time to send message
          let n = this.ChatsList.find(a => a.id == message.userId)?.noOfUnRead || 0;
          this.ChatsList.find(a => a.id == message.userId)!.noOfUnRead = n + 1;
          /****************************************** */
          this.ChatsList.find(a => a.id == message.userId)!.lastMess = message.message;
          this.ChatsList.find(a => a.id == message.userId)!.lastMessDate = message.date;
          this.SortChatList();
        }
      }
    });

  }

  getAllMessages(id: number){
    this.ChatService.getAllTeamChats(id,"team").subscribe(allMessages =>{
      let usersIds = allMessages.map(a => a.userId).filter((elem, index, self) => index === self.indexOf(elem));
      for (let userId of usersIds) {
        this.AccountService.getAccount(userId).subscribe(account =>{
          let lastMessage = allMessages.filter(e => e.userId == userId && e.teamId == this.teamId ).sort((d1, d2) => (d1.date > d2.date) ? -1 : ((d1.date < d2.date) ? 1 : 0))[0].message;
          let lastDate = allMessages.filter(e => e.userId == userId  && e.teamId == this.teamId ).sort((d1, d2) => (d1.date > d2.date) ? -1 : ((d1.date < d2.date) ? 1 : 0))[0].date;
          let unRead = allMessages.filter(e=> e.teamId == this.teamId && e.userId == userId && e.sender == 'a' && e.read == false).length;
          this.ChatsList.push(new IMessage(account.firstName + " " + account.lastName, userId, "", lastDate, lastMessage.substring(0,25).concat( (lastMessage.length> 25 )?" ...":""),unRead));
          this.SortChatList();
        })
      }
    })
  }

  ViewChat(uId: number) {
    this.ChatService.getTeamChat(this.teamId,uId).subscribe(chat =>{
      this.openedchat = chat.reverse();
      this.chattingUser = {"id":uId,"name": this.ChatsList.find(a=>a.id == uId)!.name}
    });
    this.ReadMessages();
    
  }

  ReadMessages(){
    // Update messages to read
    this.ChatService.UpdateTeamChat(this.teamId, this.chattingUser.id, 'a').subscribe(a => {
      console.log(a);
    });
  }

  SendMessage(){
    this.newMessage.userId = this.chattingUser.id;
    this.newMessage.date = new Date().toISOString();
    this.ChatService.sendTeamMessage(this.newMessage).subscribe(newMessage =>{
      this.openedchat.unshift(newMessage);
    });
    this.ChatsList.find(a=>a.id == this.chattingUser.id)!.lastMess = this.newMessage.message;
    this.ChatsList.find(a=>a.id == this.chattingUser.id)!.lastMessDate = this.newMessage.date;
    this.SortChatList();
    this.newMessage.message = "";
  }

  SortChatList(){
    this.ChatsList = this.ChatsList.sort((m1, m2) => (m1.lastMessDate > m2.lastMessDate) ? -1 : (m1.lastMessDate < m1.lastMessDate) ? 1 : 0);
  }


}
