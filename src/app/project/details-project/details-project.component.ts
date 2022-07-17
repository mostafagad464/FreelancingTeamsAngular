import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Project } from 'src/app/_models/project';
import { AuthService } from 'src/app/_services/auth.service';
import { ProjectService } from 'src/app/_services/project.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-details-project',
  templateUrl: './details-project.component.html',
  styleUrls: ['./details-project.component.css']
})
export class DetailsProjectComponent implements OnInit {

  project: Project = new Project(0, new Date, "Project", "", 0, "Descrption", 2, 0, 0, 2);
  constructor(public activateRoute: ActivatedRoute, public proSer: ProjectService,
    public router: Router,
    private authService: AuthService,
    private userService: UserService) { }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    this.sub2?.unsubscribe();
  }
  sub: Subscription | null = null;
  sub2: Subscription | null = null;
  userId: number = 0;
  isFreelancer: boolean = false;
  isOwner: boolean = false;
  ownerId: number = 0;



  ngOnInit(): void {
    this.sub = this.activateRoute.params.subscribe(a => {
      this.sub2 = this.proSer.getProject(a['id']).subscribe(
        p => {
          this.project = p;
          this.ownerId = this.project.clientId;
        }
      )
    })

    this.userId = this.authService.getCurrentUser()?.id;
    this.userService.getUser(this.userId).subscribe(
      u => {
        this.isFreelancer = u.freelancer;
        if (this.userId == this.ownerId)
        {
          this.isOwner = true;
        }
      }
    )

  }
  edit() {
    this.router.navigate(['/projects/edit/', this.project.id])
  }

}
