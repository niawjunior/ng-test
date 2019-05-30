import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-working-with-string',
  templateUrl: './working-with-string.component.html',
  styleUrls: ['./working-with-string.component.css']
})
export class WorkingWithStringComponent implements OnInit {
  name: string;
  constructor() { }

  ngOnInit() {
    this.name = this.greet('niaw junior');
  }

  greet(name: string): string {
    return `Hello ${name}`;
  }
}
