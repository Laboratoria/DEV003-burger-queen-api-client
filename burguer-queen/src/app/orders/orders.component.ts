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
  preparingTime: any;
  verifyUser() {
    const sessionUser = sessionStorage.getItem('user')
    if (sessionUser === 'cheff') { return 'none' } else {return 'block'}
  }



  // Para cargar los productos desde la API
  constructor(private api: ApiBQService, private router: Router) {
    this.getOrdersArray();
  }

  getOrdersArray(){
    this.api.getOrders().subscribe({
      next: (data: any) => {
        this.ordersArray = data;
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

  updateOrder(order:any, value:string ) {
    let update = {
      status: value,
      datetimeProcessed: ""
    }

    update.datetimeProcessed  = new Date().toLocaleString();

    this.updateApiOrder(order.id, update)

    console.log(order.id, typeof(order.id));
    // Actualizar la propiedad datetimeProcessed en el objeto order
    order.datetimeProcessed = update.datetimeProcessed;
    // Calcular el nuevo tiempo de preparación
    this.preparingTime = this.calcPreparingTime(order);
  }

  calcPreparingTime(order : any) {
    const timeCreated = Date.parse(order.dataEntry); // Obtener tiempo en milisegundos
    const timeProcessed = Date.parse(order.datetimeProcessed); // Obtener tiempo en milisegundos
    const timeDelivered = timeProcessed - timeCreated; // Calcular diferencia en milisegundos

    // Convertir tiempo transcurrido de milisegundos a minutos
    const minutes = Math.floor(timeDelivered / (1000 * 60));

    if (isNaN(minutes)) { return 0
    } else { return minutes}
  }
}
