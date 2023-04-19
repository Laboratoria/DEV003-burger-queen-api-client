import { Injectable } from '@angular/core';
import { ProductService, Product } from 'src/types';

@Injectable({
  providedIn: 'root'
})
export class AddProductService {
  // static getProducts(): import("src/types").OrdersProduct {
  //   throw new Error('Method not implemented.');
  // }
  
  constructor() { }
  // Propiedad de array de strings en un array vacio
  products: ProductService[] = [];
  names: string[] = [];

  add(product: Product) {
    // this.products.push(product);
    const productExists = this.products.some((item) => item.product.id === product.id)

    if (productExists) {
      this.products = this.products.map((item) =>
        item.product.id === product.id ? { product: item.product, quantity: item.quantity + 1 } : item
      )
    } else {
      this.products = [...this.products, { product, quantity: 1 }]
    }
  }

  removeProductsTicket(productId: number) {
    // this.products.map((item, index) => {
    //   if (item.id === productId) {
    //     this.products.splice(index, 1);
    //   }
    // });
    this.products = this.products.filter((item) => item.product.id !== productId)
  }

  // name service
  // Propiedad de array de strings en un array vacio
 
  addName(name: string) {
    this.names.push(name);
  }

}
