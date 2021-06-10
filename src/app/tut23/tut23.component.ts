import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tut23',
  templateUrl: './tut23.component.html',
  styleUrls: ['./tut23.component.scss']
})
export class Tut23Component implements OnInit {

  name = "this is a teSt namE"
  today = Date.now()
  str = "Hello Angular"
  money=100
  constructor() { }

  ngOnInit(): void {
  }

}
