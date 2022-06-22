import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/_models/user';
import { UserProfileService } from 'src/app/_services/user-profile.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  // user : User = new User()
  sub:Subscription|null=null;
  constructor(public userSer:UserProfileService) { 

  }

  ngOnInit(): void {
    this.sub=this.userSer.getUserInfoByid(1).subscribe(a=>console.log(a))
  }

}
