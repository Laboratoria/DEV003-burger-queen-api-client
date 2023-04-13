import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root'})
export class AuthGuard {

  constructor(private router: Router){}

  CanActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
      debugger;
      const token =localStorage.getItem('token');
      if (token){
        return true
      }
      this.router.navigate(['']);
      return false
  }

}



