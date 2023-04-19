
import { Component, Input } from '@angular/core';
import { RequestService } from '../servicios/request.service';
// import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import type { Product } from 'src/types';
import { AddProductService  } from '../servicios/addproducts.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [CookieService]
})
export class HomeComponent{ 
  constructor(
    private requestService: RequestService,
    // private router: Router,
    private cookieService: CookieService,
    public AddProductService : AddProductService 
  ) {
    this.getProducts()
  }
  @Input() item?: string;

  products: Array<Product> = []
  filteredProducts: Array<Product> = []

  getProducts(): void {
    const token = localStorage.getItem('accessToken');
    this.requestService.getProductsRequest(token).subscribe({
      next: (response) => {
        console.log('estos son los productos',response)
        this.products = response
        this.filteredProducts = response
        
      }
    })
  }
  formatPrice(price: number) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  }

  filterByFoodType(type: string) {
    if (type === "all") {
      this.filteredProducts = this.products
      return
    }
    const productBreakfast = this.products.filter((product) => product.type === type)
    this.filteredProducts = productBreakfast
  }
  addProducts(name:Product) {
    this.AddProductService.add(name);
    console.log('adding', this.AddProductService.products)
  }

}
