import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { OrdersComponent } from './orders/orders.component';
import { ordersGuard } from './guard/orders.guard';
import { menuGuard } from './guard/menu.guard';



const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'menu', component: MenuComponent, canActivate: [menuGuard]},
  { path: 'orders', component: OrdersComponent, canActivate: [ordersGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
