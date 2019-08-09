import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extension',
  templateUrl: './extension.component.html',
  styleUrls: ['./extension.component.css']
})
export class ExtensionComponent implements OnInit {
  cls="alert"
  constructor() { }

  ngOnInit() {
  }
  myclick(wh:number){
    if(wh==1){
      //pri
      this.cls='alert alert-info'
    }else if(wh==2){
        //sec
        this.cls='alert alert-secondary'
    }else {
//success
this.cls='alert alert-success'
    }

  }

}
