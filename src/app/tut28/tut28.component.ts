import { Component, OnInit } from '@angular/core';
import { ApiusersService } from '../apiusers.service';

@Component({
  selector: 'app-tut28',
  templateUrl: './tut28.component.html',
  styleUrls: ['./tut28.component.scss']
})
export class Tut28Component implements OnInit {

  constructor(private user:ApiusersService) {
    this.user.getData().subscribe(data => {
      console.warn(data)
    })
   }

  ngOnInit(): void {
  }

}
