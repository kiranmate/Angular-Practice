import { Component, OnInit } from '@angular/core';
import { EvAl } from './EvAl';

@Component({
  selector: 'app-int-comp-com-v1',
  templateUrl: './int-comp-com-v1.component.html',
  styleUrls: ['./int-comp-com-v1.component.css']
})
export class IntCompComV1Component implements OnInit {
      evAl:EvAl
  constructor() { }

  ngOnInit() {
  }
 capturedAlert(evAl:EvAl)
 {
  console.log("received event")
  this.evAl=evAl
 }
}
