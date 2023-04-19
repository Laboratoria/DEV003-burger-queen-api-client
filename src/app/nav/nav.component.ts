import { Component } from '@angular/core';
import { faBurger } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers: [CookieService]
})
export class NavComponent { 
  constructor(
    private router: Router,
    private cookieService: CookieService
  ){}
  faBurger = faBurger;

  handleLogout() {
    this.cookieService.delete('accessToken')
    this.router.navigate(['login'])
  }

}
