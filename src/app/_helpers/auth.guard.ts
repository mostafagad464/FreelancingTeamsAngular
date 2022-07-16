import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from '../_services/account.service';
import { AuthService } from '../_services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private authService:AuthService, private router:Router){}

  id = 0;

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.authService.getCurrentUser()?.id != null)
    {
      return true;
    }
    // this.router.navigate(['login'], {queryParams:{retunUrl:state.url}});
    this.authService.redirectUrl = state.url;
    this.router.navigate(['login']);
    return false;
  }
  
}
