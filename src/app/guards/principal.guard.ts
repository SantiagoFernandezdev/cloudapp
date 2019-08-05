import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrincipalGuard implements CanActivate {
  public value: boolean = true;

  constructor(private router: Router) { }

  canActivate(): boolean {
    if(this.value) {
      console.log('leido');
      return true;
    } else {
      this.router.navigate(['/formularios']);
      return false;
    }
  }
}
