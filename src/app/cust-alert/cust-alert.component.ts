import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { btnev } from './ev';

@Component({
  selector: 'app-cust-alert',
  templateUrl: './cust-alert.component.html',
  styleUrls: ['./cust-alert.component.css']
})
export class CustAlertComponent implements OnInit {
  @Input()
  ttl:string

  @Input('typ')
  type:string
  
  @Output()
  btnclk:EventEmitter<btnev>=new EventEmitter()

  okclk(){
    let ev:btnev={
      ttl:this.ttl,
      typ:this.type
    }
    this.btnclk.emit(ev)
    console.log("button clicked in cust alert component")

  }
  constructor() { }

  ngOnInit() {
    this.type=`alert alert-${this.type}`
    console.log(this.type)
  }

}
