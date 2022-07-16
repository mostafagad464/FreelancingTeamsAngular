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


  getAllAccountChats(id: number) {
    return this.http.get<AccountMessage[]>(this.baseurl + "account?UserId=" + id);
  }
  getAccountChat(SId: number, RId: number) {
    return this.http.get<AccountMessage[]>(this.baseurl + "account/chat?SenderId=" + SId + "&RecieverId=" + RId);
  }
  UpdateAccountChat(SId:number, RId:number){
    return this.http.put<AccountMessage[]>(this.baseurl + "account?SenderId=" + SId + "&RecieverId=" + RId, null);
  }

  getAllTeamChats(id: number, type: string) { //type to get all freelancer messages or all team messages(id is for team or user?)
    return this.http.get<TeamFreelancerMessage[]>(this.baseurl + "team?UserId=" + id + "&type=" + type);
  }
  getTeamChat(TId: number, UId: number) {
    return this.http.get<TeamFreelancerMessage[]>(this.baseurl + "team/chat?TeamId=" + TId + "&UserId=" + UId);
  }
  UpdateTeamChat(TId: number, UId: number, S:string){
    return this.http.put<TeamFreelancerMessage[]>(this.baseurl + "team?TeamId=" + TId + "&UserId=" + UId + "&Sender=" + S, null);
  }

  sendAccountMessage(message: AccountMessage) {
    return this.http.post<AccountMessage>(this.baseurl + "account", message);
  }

  sendTeamMessage(message: TeamFreelancerMessage) {
    return this.http.post<TeamFreelancerMessage>(this.baseurl + "team", message);
  }

  getAccountMessagesCount(accountId:number){
    return this.http.get<any>(this.baseurl + "account/count/" + accountId);
  }

}
