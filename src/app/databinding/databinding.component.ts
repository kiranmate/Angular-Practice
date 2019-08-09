import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  mynm:string="github"
  typ="input"
  tw="hi"
  val=0
  setVal(val:number){
       this.val=val;
  }

  myclick(ev:any){
    console.log(new Date().toString());
    console.log(ev);
  }
  constructor() { }

  ngOnInit() {
  }

}
