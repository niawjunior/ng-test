import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-working-with-ng-model',
  templateUrl: './working-with-ng-model.component.html',
  styleUrls: ['./working-with-ng-model.component.css']
})
export class WorkingWithNgModelComponent implements OnInit {
  number1: number;
  number2: number;
  constructor() { }

  ngOnInit() {
  }
  increaseValue(num1: number = 0, num2: number = 0): number {
    return num1 + num2;
  }
}
