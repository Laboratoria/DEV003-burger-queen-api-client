import { Component, ViewChild } from '@angular/core';
import { OrdersServiceService } from '../servicios/orders.service.service';
import { Order } from 'src/types';
import { AddProductService } from '../servicios/addproducts.service';


@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css'],
})


export class KitchenComponent {

  
  public listaOr: Order[]=[]

  constructor(
    private ordersServiceService:OrdersServiceService,
    public AddProductService : AddProductService
  ){}
  
  ngOnInit():void{
    this.cargarPedidos()
  }
  cargarPedidos(){
    this.ordersServiceService.getOrderService()
    .subscribe(respuesta =>{
      this.listaOr =respuesta;
      console.log('Aqui',respuesta)
    })
  }

}
