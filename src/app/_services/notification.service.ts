import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { Notifications } from '../_models/notifications';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  public hubConnection!: HubConnection;
  private loginToken = "";
  baseurl = "https://localhost:7152/api/Notifications/";

  constructor(public http: HttpClient) {
    this.loginToken = sessionStorage.getItem("access_token")?.toString()!;
  }

  public startConnection = () => {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl(`https://localhost:7152/notify?token=${this.loginToken}`)
      .build();
    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err))
  }

  getNotIficationsCount(id: number) {
    return this.http.get<any>(this.baseurl + "account/count/" + id);
  }

  getAccountNotifications(id: number) {
    return this.http.get<Notifications[]>(this.baseurl + "account/" + id);
  }

  UpdateAccountNotification(accountId: number) {
    return this.http.put<Notifications[]>(this.baseurl + "account/" + accountId, null);
  }

  // proposal, complain, handle complain, add user, 
  postAccountNotification(accountId: number, notication: Notifications) {
    return this.http.post<Notification>(this.baseurl + "account/" + accountId, notication)
  }
  // deal, join, announce, complain handled
  postTeamNotification(teamId: number, notication: Notifications) {
    return this.http.post<Notification>(this.baseurl + "team/" + teamId, notication)
  }

}
