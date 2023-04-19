import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import * as Toastify from 'toastify-js';

@Injectable({
  providedIn: 'root'
})
export class BlockRoutesGuard implements CanActivate {

  constructor(
    private cookieService: CookieService,
    private router: Router
  ){}

  redirect(flag:boolean):any{
    if(!flag){
      this.router.navigate(['/','login'])
        Toastify({
          text: ('Please log in with your credentials'),
          duration: 10000,
          close: true,
          gravity: "top",
          position: "right",
          stopOnFocus: true,
          style: {
            background: "#dc3545",
          }
        }).showToast();
      }
    }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const cookie = this.cookieService.check('accessToken')
      this.redirect(cookie)
    return cookie;
  }
  
}
