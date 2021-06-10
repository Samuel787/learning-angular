import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-tut22',
  templateUrl: './child-tut22.component.html',
  styleUrls: ['./child-tut22.component.scss']
})
export class ChildTut22Component implements OnInit {

  @Output() parentFunction:EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {

  }

  sendData() {
    let data = {name: "Samuel", age: 24}
    this.parentFunction.emit(data)
  } 
}
