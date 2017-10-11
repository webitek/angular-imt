import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css'],
  // inputs: ['name'] //вместо декоратор @Input()
})
export class SampleComponent implements OnInit {

  @Input()
  // @Input('action')
  name: string;
  constructor() { }

  ngOnInit() {
  }
}
