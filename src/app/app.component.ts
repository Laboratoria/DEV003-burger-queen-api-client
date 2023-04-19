import { Component } from '@angular/core';
import { faBurger, faCoffee, } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
  faBurger = faBurger;
  faCoffee = faCoffee;
}
