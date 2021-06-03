import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user2-component',
  templateUrl: './user2-component.component.html',
  styleUrls: ['./user2-component.component.scss']
})
export class User2ComponentComponent implements OnInit {

  @Input() users

  constructor() { }

  ngOnInit(): void {
    console.warn()
  }

}
