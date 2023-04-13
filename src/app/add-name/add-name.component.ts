import { Component } from '@angular/core';
import { AddProductService  } from '../addproducts.service';

@Component({
  selector: 'app-add-name',
  templateUrl: './add-name.component.html',
  styleUrls: ['./add-name.component.css']
})
export class AddNameComponent {

  // variable namesService is public so we can use it in different components
  constructor(public namesService : AddProductService ){}

  name: string = '';

  addnames(){
    this.namesService.addName(this.name); 
    this.name = ''; // clean the input 
  }

}
