import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tut22',
  templateUrl: './tut22.component.html',
  styleUrls: ['./tut22.component.scss']
})
export class Tut22Component implements OnInit {

  name = "";

  constructor() { }

  ngOnInit(): void {
  }

  parentFunction(data) {
    if (this.name === "") {
      this.name = data.name;
    } else {
      this.name = "";
    }
  }

}
