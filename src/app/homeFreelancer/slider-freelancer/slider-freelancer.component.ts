import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Project } from 'src/app/_models/project';
import { User } from 'src/app/_models/user';
import { AuthService } from 'src/app/_services/auth.service';
import { ProjectService } from 'src/app/_services/project.service';
import { ProjectsService } from 'src/app/_services/projects.service';
import { TeamService } from 'src/app/_services/team.service';
import { UserProfileService } from 'src/app/_services/user-profile.service';

@Component({
  selector: 'app-slider-freelancer',
  templateUrl: './slider-freelancer.component.html',
  styleUrls: ['./slider-freelancer.component.css']
})
export class SliderFreelancerComponent implements OnInit {

  userId:any;
  projects:Project[]=[]
  userInfo = new User(0, "", 0, 0, new Date().toISOString(), "", "", "", 0, true, "", true, false, null, null, true, null, null, null, null,
      null);
  sub1:Subscription|null=null;
  sub2:Subscription|null=null;
  sub3:Subscription|null=null;
  constructor(public authserv:AuthService,public teamServ:TeamService,public projectserv:ProjectService,public useeserv:UserProfileService) { }

  ngOnInit(): void {
    this.userId=this.authserv.getCurrentUser()?.id;
    this.sub3=this.useeserv.getUserInfoByid(this.userId).subscribe(u=>
      {
        this.userInfo=u;

      }
    )

    this.sub2=this.projectserv.getAllProjects().subscribe(
      p=>this.projects=p
    )
  }

}
