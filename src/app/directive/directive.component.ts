import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  mystyle={
    border:`2px solid red`
  }

mobiles=['apple','samsung','nokia','honor']

  constructor() { }

  ngOnInit() {
  }

}
