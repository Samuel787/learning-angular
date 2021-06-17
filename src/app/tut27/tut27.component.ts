import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-tut27',
  templateUrl: './tut27.component.html',
  styleUrls: ['./tut27.component.scss']
})
export class Tut27Component implements OnInit {

  name = "";
  constructor(private user: UsersService) {
    let data = this.user.getData()
    this.name = data.name
  }

  ngOnInit(): void {
  }

}
