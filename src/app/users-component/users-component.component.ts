import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-users-component',
  templateUrl: './users-component.component.html',
  styleUrls: ['./users-component.component.scss']
})
export class UsersComponentComponent implements OnInit {

  @Input() hero
  constructor() { }

  ngOnInit(): void {
  }

}
