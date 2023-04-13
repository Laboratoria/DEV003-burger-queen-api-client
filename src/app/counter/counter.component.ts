import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  number: number = 1

  decrement() {
    if (this.number - 1 < 0) {
      this.number = 0
    } else {
      this.number--
    }
  }

  increase() {
    this.number++
  }

}
