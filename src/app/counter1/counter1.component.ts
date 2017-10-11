import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter/counter.service';

@Component({
  selector: 'app-counter1',
  templateUrl: './counter1.component.html',
  styleUrls: ['./counter1.component.css']
})
export class Counter1Component implements OnInit {

  private counter: number;
  title: string = 'first';
  nameValue: string;

  constructor(private counterService: CounterService) {
  }

  plusOne(){
    this.counterService.increment();
    this.counter = this.counterService.getValue();
  }

  minusOne(){
      this.counterService.decrement();
      this.counter = this.counterService.getValue();
  }

  changeName(){
    this.nameValue = 'new' + new Date().getTime();
  }

  ngOnInit() {
      console.log(this.title + ' ready');
  }

}
