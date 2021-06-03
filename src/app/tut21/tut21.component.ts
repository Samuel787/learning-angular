import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tut21',
  templateUrl: './tut21.component.html',
  styleUrls: ['./tut21.component.scss']
})
export class Tut21Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tut21_users=[
    {
      name: "peter",
       age: 25,
       address: "noida"
    },
    {
      name: "bruce",
       age: 25,
       address: "gurgaon"
    },
    {
      name: "tony",
       age: 25,
       address: "delhi"
    }
  ]

}
