import { btnev } from './cust-alert/ev';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstAngApp';
  ev:btnev

  isSh=false

  Onbtn(ev?:btnev){
   
    
    this.ev=ev
this.title=new Date().toDateString()

    console.log(ev)
    console.log("In app component Onbtn")
  }
}
