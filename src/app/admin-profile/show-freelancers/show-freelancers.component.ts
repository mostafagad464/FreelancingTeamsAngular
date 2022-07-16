import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/_models/account';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services/account.service';
import { FreelancerService } from 'src/app/_services/freelancer.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-show-freelancers',
  templateUrl: './show-freelancers.component.html',
  styleUrls: ['./show-freelancers.component.css']
})
export class ShowFreelancersComponent implements OnInit {

  freelancers:User[]=[];
  freelancers1:Account[]=[];
  

  constructor(public freelacerServ:FreelancerService, public accServ:AccountService, public userServ:UserService) { }

  ngOnInit(): void {
    this.userServ.getAllFreelancers().subscribe(a => {
      this.freelancers = a;
      console.log(a.length)
      for(var i = 0 ; i < this.freelancers.length ; i++){
        this.accServ.getAccount(this.freelancers[i].id).subscribe(a => {
          this.freelancers1.push(a);
          console.log("this.freelancers1:"+this.freelancers1.length);
        })
      }
    })
  }

}
