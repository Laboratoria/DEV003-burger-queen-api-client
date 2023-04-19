import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component'
import { OrdersComponent } from './orders/orders.component';
import { BlockRoutesGuard } from './block-routes.guard';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent
},
{
  path: 'home', 
  component: HomeComponent,
  canActivate: [BlockRoutesGuard]
},
{
  path: 'kitchen',
  component: KitchenComponent,
  canActivate: [BlockRoutesGuard]
},
{
  path: 'orders',
  component: OrdersComponent,
  canActivate: [BlockRoutesGuard]
},
{
  path: '',
  redirectTo: '/login',
  pathMatch: 'full'
},
{
  path: '**',
  component: PagenotfoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
