import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tut20',
  templateUrl: './tut20.component.html',
  styleUrls: ['./tut20.component.scss']
})
export class Tut20Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  data={
    name: "bruce",
    age: 40,
    email: "test@test.com"
  }
}
