import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-test',
  templateUrl: './for-test.component.html',
  styleUrls: ['./for-test.component.css']
})
export class ForTestComponent implements OnInit {
  totalVotes = 0;
  name = '';
  number1: number;
  number2: number;
  getCurrenciesList;
  constructor() { }

  ngOnInit() {
    this.name = this.greet('niaw junior');
    this.getCurrenciesList = this.getCurrencies();
  }
  increaseValue(num1: number = 0, num2: number = 0): number {
    return num1 + num2;
  }
  greet(name: string): string {
    return `Hello ${name}`;
  }
  getCurrencies() {
    return ['USD', 'AUD', 'EUR'];
  }
  upVote() {
    this.totalVotes ++;
  }
  downVote() {
    this.totalVotes --;
  }
}
