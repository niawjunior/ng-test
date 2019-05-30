import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-working-with-up-and-down',
  templateUrl: './working-with-up-and-down.component.html',
  styleUrls: ['./working-with-up-and-down.component.css']
})
export class WorkingWithUpAndDownComponent implements OnInit {
  totalVotes = 0;

  constructor() { }

  ngOnInit() {
  }
  upVote() {
    this.totalVotes ++;
  }
  downVote() {
    this.totalVotes --;
  }
}
