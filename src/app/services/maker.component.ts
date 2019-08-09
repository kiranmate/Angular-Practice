import { EvAl } from './../int-comp-com-v1/EvAl';
import { Component, OnInit } from '@angular/core';
import { AlService } from './al.service';

@Component({
  selector: 'app-maker',
  template: `
  <div class="row">
  <div class="col-md-12">
      <div  style="height:700px;" [class]="al.al">
      </div>
  </div>
</div>
  `,
  styles: []
})
export class MakerComponent implements OnInit {

  al:EvAl
  constructor(private alsv:AlService) { }

  ngOnInit() {
    this.alsv.subsriberalert((evAl:EvAl)=>{
    this.al=evAl;
    })
  }

}
