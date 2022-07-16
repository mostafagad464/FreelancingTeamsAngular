import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../_services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AnonymousGuard implements CanActivate {
  constructor(private authSerice: AuthService, private router: Router) { }

  currentUSer: number = 0;

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.authSerice.getCurrentUser()?.id == null) {
      return true;
    }
    this.router.navigate(['']);
    return false;
  }
}
