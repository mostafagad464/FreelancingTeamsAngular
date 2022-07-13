import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/_models/team';
import { Wallet } from 'src/app/_models/wallet';
import { AuthService } from 'src/app/_services/auth.service';
import { TeamService } from 'src/app/_services/team.service';
import { WalletService } from 'src/app/_services/wallet.service';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent implements OnInit {

  team:Team = new Team(0, null, "", false, new Date(), "", 0, 0, 0, "","",[], [], []);
  createWallet:boolean = false;
  wallet:Wallet = new Wallet(0, 0, 0);

  Image: File | null = null;
  imageurl = "http://ssl.gstatic.com/accounts/ui/avatar_2x.png";


  constructor(private teamService:TeamService, private walletService:WalletService, private authService:AuthService) { }

  ngOnInit(): void {
  }

  async createTeam()
  {
    console.log(this.createWallet);
    if(this.createWallet == true)
    {
      await this.walletService.createWallet(this.wallet).subscribe(
        w => {
          this.wallet = w;
          this.team.walletId = w.id;
        }
      )
      .add(()=>{
        this.team.leaderId = this.authService.getCurrentUser()?.id;
        this.teamService.createTeam(this.team).subscribe(
          t => {
            console.log(t);
          }
        )
      })
    }
    else
    {
      this.team.leaderId = this.authService.getCurrentUser()?.id;
      this.teamService.createTeam(this.team).subscribe(
        t => {
          console.log(t);
        }
      )
    }
  }

  AddImg(I: any) {
    if (I.target.value) {
      this.Image = <File>I.target.files[0];

      const reader = new FileReader();
      reader.readAsDataURL(this.Image);
      reader.onload = (_event) => {
        this.imageurl = reader.result?.toString() ? reader.result.toString() : this.imageurl;
      }
    }
  }
}
