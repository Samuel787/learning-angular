import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'youtube';
  tony="MyName"
  getName(name:String){
    alert(name)
  }

  myEvent(event){
    console.log(event)
  }
}
