import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/_models/account';
import { Client } from 'src/app/_models/client';
import { AccountService } from 'src/app/_services/account.service';
import { ClientsService } from 'src/app/_services/clients.service';

@Component({
  selector: 'app-show-clients',
  templateUrl: './show-clients.component.html',
  styleUrls: ['./show-clients.component.css']
})
export class ShowClientsComponent implements OnInit {

  clients:Client[]=[];
  clients1:Account[]=[];

  constructor(public clientServ:ClientsService, public accServ:AccountService) { }

  
  ngOnInit(): void {
    this.clientServ.getClients().subscribe(a => {
      this.clients = a;
      for(var i = 0 ; i < this.clients.length ; i++){
        this.accServ.getAccount(this.clients[i].id).subscribe(a => {
          this.clients1.push(a);
          console.log("clients"+this.clients.length);
        })
      }
    
    })
  }

}
