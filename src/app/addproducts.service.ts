import { Injectable } from '@angular/core';
import { Product } from 'src/types';

@Injectable({
  providedIn: 'root'
})
export class AddProductService {

  constructor() { }
// Propiedad de array de strings en un array vacio
  products:Product[] = [];

  add(product: Product){
    this.products.push(product);
  }

  removeProductsTicket(productId:any) {
    this.products.map((item, index) => {
      if (item.id === productId) {
        this.products.splice(index, 1);
      }
    });
  }

  // name service
  // Propiedad de array de strings en un array vacio
  names:string[] = [];

  addName(name: string){
    this.names.push(name);
  }
  
}
