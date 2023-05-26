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
  // cheffOrdersArray:any [] = []



  // Para cargar los productos desde la API
  constructor(private api: ApiBQService, private router: Router) {
    this.getOrdersArray();

  }

  getOrdersArray(){
    this.api.getOrders().subscribe({
      next: (data: any) => {
        this.ordersArray = data;
        // data.map((order: any) => {
        //   order.status === 'pending' || order.status === 'delivering' ? this.cheffOrdersArray.push(order) :null })


        console.log(data);

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
    // this.cheffStatus()
    console.log(id, typeof(id));
    this.updateApiOrder(id, update)
  }

  // Fx que resta dateProcessed con dataEntry, probar convirtiendolo en numero.
  // Definir variable en cero y asignar la hora de creacion y luego actualizar cuando se cree el date processed.
  // si no, que inicie en 00:00 y se actualice la resta al cambio de status

  // cheffStatus(status:string) {
  //   if (status === 'pending' || status === 'delivering') {return true} else {return false}
  // }

}
