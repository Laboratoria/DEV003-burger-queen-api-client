import { Component, Output } from '@angular/core';
import { ApiBQService } from '../services/api-bq.service';
import { Router } from '@angular/router';
// import * as dayjs from 'dayjs'
// import { min } from 'rxjs';



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

  preparingTime: any;

  updateOrder(order:any, value:string ) {
    let update = {
      status: value,
      datetimeProcessed: ""
    }

    update.datetimeProcessed  = new Date().toLocaleString();
    // this.cheffStatus()

    this.updateApiOrder(order.id, update)
    // this.calcTimeAct(order)
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

    return minutes;
  }

// Fx Que imprime el tiempo transcurrido
  // calcTimeAct(order:any) {
  //       const timeCreated = dayjs(order.dataEntry)
  //       const timeProcessed = dayjs(order.datetimeProcessed)
  //       //se usa libreria day y se coloca true para que salgan los decimales
  //       const timeDiff = (timeProcessed.diff(timeCreated, 'minute', true))/60
  //       // mathfloor para seleccional la parte entera
  //       const hours = Math.floor(timeDiff)
  //       // formular para seleccionar la parte decimal https://qastack.mx/programming/4512306/get-decimal-portion-of-a-number-with-javascript
  //       const minute = (Math.floor((timeDiff % 1) * 60)).toLocaleString('en-US', { minimumIntegerDigits: 2 })

  //       console.log(timeDiff, hours, minute);

  //       const timeAct = hours.toString() + ':' + minute.toString()

  //       return timeAct
  //     }

// guardar 2 variables uno para las horas y otro para los minutos todo empieza en 00:00
// tomar esos minutos y si es menor a 60 entonces colocar valor solo en variable de minutos
// si es mayor entonces dividir entre 60, guardar la parte entera en la const de horas
// La parte decimal multiplicarla por 60 y colocarla en minutos
// luego imprimir {{ const horas ':' const minutos}}

//   calcTimeAct(order:any) {
//     const timeCreated = order.dataEntry
//     const timeProcessed = order.datetimeProcessed
//     const eventStartTime = new Date(timeCreated);
//     const eventEndTime = new Date(timeProcessed);
//     const duration = eventEndTime.valueOf() - eventStartTime.valueOf();
//     const hours = Math.ceil(duration / (1000*60*60*60))
// console.log(hours);

//     return this.timeAct = hours
//   }

  // Fx que timeDiffta datetimeProcessed con dataEntry, probar convirtiendolo en numero.
  // Definir variable en cero y asignar la hora de creacion y luego actualizar cuando se cree el date timeProcessed.
  // si no, que inicie en 00:00 y se actualice la timeDiffta al cambio de status

  // cheffStatus(status:string) {
  //   if (status === 'pending' || status === 'delivering') {return true} else {return false}
  // }

}
