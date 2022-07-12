import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { AccountMessage } from '../_models/account-message';
import { TeamFreelancerMessage } from '../_models/team-freelancer-message';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  public hubConnection!: HubConnection;
  private loginToken = "";
  baseurl = "https://localhost:7152/api/Chat/";

  constructor(public http: HttpClient) {
    this.loginToken = sessionStorage.getItem("access_token")?.toString()!;
  }

  public startConnection = () => {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl(`https://localhost:7152/chat?token=${this.loginToken}`)
      .build();
    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err))
  }

  // public RecieveAccountMessage = () => {
  //   this.hubConnection.on('AccountsMessaging',message=>{
  //     console.log(message);
  //     return message;
  //   })
  // }

  public RecieveTeamOrFreelancerMessage = () => {
    this.hubConnection.on('TeamsAndFreelancersMesseging', message => {
      return message;
    })
  }

  // public addMessageListener = () => {
  //   this.hubConnection.on('AccountsMessaging', (data) => {
  //     this.data = data;
  //     console.log(data);
  //     return data;
  //   });
  // }

  getAllAccountChats(id: Number) {
    return this.http.get<AccountMessage[]>(this.baseurl + "account?UserId=" + id);
  }
  getAccountChat(SId: Number, RId: number) {
    return this.http.get<AccountMessage[]>(this.baseurl + "account/chat?SenderId=" + SId + "&RecieverId=" + RId);
  }

  getAllTeamChats(id: Number, type: string) { //type to get all freelancer messages or all team messages(id is for team or user?)
    return this.http.get<TeamFreelancerMessage[]>(this.baseurl + "team?UserId=" + id + "&type=" + type);
  }
  getTeamChat(TId: Number, UId: number) {
    return this.http.get<AccountMessage[]>(this.baseurl + "team/chat?TeamId=" + TId + "&UserId=" + UId);
  }

  sendAccountMessage(message: AccountMessage) {
    return this.http.post<AccountMessage>(this.baseurl + "account", message);
  }

}