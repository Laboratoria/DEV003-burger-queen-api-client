import { Component } from '@angular/core';
import { AddProductService } from '../addproducts.service';
import { Product } from 'src/types';

@Component({
  selector: 'app-list-name',
  templateUrl: './list-name.component.html',
  styleUrls: ['./list-name.component.css']
})
export class ListNameComponent {
  constructor(public namesService : AddProductService){}
}
