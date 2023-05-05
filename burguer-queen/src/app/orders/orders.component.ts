import { Component, Output } from '@angular/core';
import { ApiBQService } from '../services/api-bq.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {

  @Output() title:any = "Orders"

  ordersArray:any[] = []

  orderStatus:string = ''

  // Para cargar los productos desde la API
  constructor(private api: ApiBQService, private router: Router) {
    this.getOrdersArray();
  }

  getOrdersArray(){
    this.api.getOrders().subscribe({
      next: (data: any) => {
        this.ordersArray = data;
      }
    })
  }

  updateApiOrder(id:number, update:object) {
    this.api.patchOrder(id, update).subscribe({
      next: (data: any) => {
        console.log(data);
      },
      error: (error:any) => {
        console.log(error);

      },
    })
  }

  updateOrder(id:number, value:string ) {
    let update = {
      status: value,
      dateProcessed: ""
    }

    update.dateProcessed  = new Date().toLocaleString();
    console.log(id, typeof(id));
    this.updateApiOrder(id, update)
  }
}
