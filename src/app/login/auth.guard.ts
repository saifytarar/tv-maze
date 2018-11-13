import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './login.service';


@Injectable({
  providedIn: 'root'
})


export class AuthGuard implements CanActivate {
  constructor(public authService: LoginService, public route: Router) { }
  canActivate(): boolean {
    if (!this.authService.isAuthentiated()) {
      this.route.navigate(['login']);
      return false;
    }
    return true;
  }
}
