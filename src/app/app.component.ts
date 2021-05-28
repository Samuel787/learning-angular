import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  tut13_color = "golden"
  tut12_conditional = false
  tut12_conditional_string = "no"
  tut12_color = "blue"
  tutorial_11_name = "James Bonda"
  disabledBox = true
  disabledBoxButton(){
    this.disabledBox = !this.disabledBox
  }

  title = 'youtube';
  tony="MyName"
  getName(name:String){
    alert(name)
  }

  myEvent(event){
    console.log(event)
  }

  tutorial_10_words = ""
  tutorial10GetVal(val){
    this.tutorial_10_words = val;
    console.log(val)
  }

}
