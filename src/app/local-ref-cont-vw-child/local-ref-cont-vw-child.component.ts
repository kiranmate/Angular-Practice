import { Component, OnInit, ViewChild, ElementRef,ContentChild } from '@angular/core';

@Component({
  selector: 'app-local-ref-cont-vw-child',
  templateUrl: './local-ref-cont-vw-child.component.html',
  styleUrls: ['./local-ref-cont-vw-child.component.css']
})
export class LocalRefContVwChildComponent implements OnInit {
  
  @ViewChild('usnm',{ read: true, static: false })
  usnm :  ElementRef

  @ContentChild('newdv',{ read: true, static: false })
  newdv:ElementRef

  constructor() { }

  ngOnInit() {
    this.usnm.nativeElement.style.border="1 px solid green"
    this.newdv.nativeElement.style.border="2 px solid red"
  }
 
btnclk(el:any){
  el.style.border="2px solid red"
  console.log(el.value)

}
}
