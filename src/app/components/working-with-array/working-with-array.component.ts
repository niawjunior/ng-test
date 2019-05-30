import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-working-with-array',
  templateUrl: './working-with-array.component.html',
  styleUrls: ['./working-with-array.component.css']
})
export class WorkingWithArrayComponent implements OnInit {
  getCurrenciesList: any;
  constructor() { }

  ngOnInit() {
    this.getCurrenciesList = this.getCurrencies();
  }

  getCurrencies() {
    return ['USD', 'AUD', 'EUR'];
  }
}
