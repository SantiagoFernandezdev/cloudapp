import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccesoGuard implements CanActivate {
  // tslint:disable-next-line:variable-name
  public value: boolean = true;

  constructor(private router: Router) { }

  canActivate(): Promise<boolean> | Observable<boolean> | boolean {
    if (this.value){
      return this.value;
    } else {
      this.router.navigate(['home']);
      return this.value;
    }
  }
}
