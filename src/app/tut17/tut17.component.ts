import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tut17',
  templateUrl: './tut17.component.html',
  styleUrls: ['./tut17.component.scss']
})
export class Tut17Component implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }

  random_color = "red"
  random_color_list = ["red", "orange", "yellow", "green","blue", "indigo", "violet"]
  setRandomColor(){
    this.random_color = this.random_color_list[Math.floor(Math.random() * this.random_color_list.length)]
  }

}
