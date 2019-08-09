import { EvAl } from './../int-comp-com-v1/EvAl';

import { EventEmitter } from 'protractor';
//import { EventEmitter } from '@angular/core';


export class AlService {
   private alEm:EventEmitter<EvAl>=new EventEmitter()


  constructor(al:string) { }
  publishAl(){
    this.alEm.emit({al:al})
  }
 subsriberalert(cbfn:(ev:EvAl)=>void){
this.alEm.subsriberalert(ev => cbfn(ev))
 }
}
