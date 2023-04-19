import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http'
import { KitchenComponent } from './kitchen/kitchen.component';
import { CounterComponent } from './counter/counter.component';
import { BillComponent } from './bill/bill.component';
import { NavComponent } from './nav/nav.component';
import { CdTimerModule } from 'angular-cd-timer';
import { OrdersComponent } from './orders/orders.component';
import { CookieService } from 'ngx-cookie-service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PagenotfoundComponent,
    KitchenComponent,
    CounterComponent,
    BillComponent,
    NavComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
    CdTimerModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
