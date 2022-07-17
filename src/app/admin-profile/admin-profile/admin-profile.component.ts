import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Account } from 'src/app/_models/account';
import { Admin } from 'src/app/_models/admin';
import { Client } from 'src/app/_models/client';
import { Complain } from 'src/app/_models/complain';
import { Freelancer } from 'src/app/_models/freelancer';
import { Team } from 'src/app/_models/team';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services/account.service';
import { ClientsService } from 'src/app/_services/clients.service';
import { ComplainService } from 'src/app/_services/complain.service';
import { FreelancerService } from 'src/app/_services/freelancer.service';
import { TeamService } from 'src/app/_services/team.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  name="";
  userName="";
  email="";
  freelancers:User[]=[];
  clients:Client[]=[];
  complains:Complain[]=[];
  teams:Team[]=[]

  constructor(public accServ:AccountService, public ac:ActivatedRoute, public compSer:ComplainService, public freelancerServ:FreelancerService, public clientServ:ClientsService, public teamServ:TeamService, public userServ:UserService) { }

  
  ngOnInit(): void {
    this.ac.params.subscribe(a=>{
      this.accServ.getAccount(a['id']).subscribe(a => {
        console.log(a);
        this.name = a.firstName + " " + a.lastName;
        this.userName = a.username;
        this.email = a.email;
      })
    })

    this.userServ.getAllFreelancers().subscribe(a => {
      this.freelancers = a;
      console.log(a.length)
    })

    this.clientServ.getClients().subscribe(a => {
      this.clients = a;
    })

    this.compSer.getComplains().subscribe(a => {
      this.complains = a;
    })

    this.teamServ.getTeams().subscribe(a => {
      this.teams = a;
    })
  }
}
