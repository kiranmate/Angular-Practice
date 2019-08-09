import { LocalRefContVwChildComponent } from './../local-ref-cont-vw-child/local-ref-cont-vw-child.component';
import { Component, OnInit } from '@angular/core';
import { IotService } from './iot.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  //providers:[IotService]
})
export class ServicesComponent implements OnInit {

  crRpm:number
  constructor(
    private iotsv:IotService
  ) { }

  ngOnInit() {
  }

  rpmOp(btn:number){
    if(btn==1){
       this.crRpm=this.iotsv.incr()
       
    }else{
      this.crRpm=this.iotsv.decr()
    
    }
  }
}
