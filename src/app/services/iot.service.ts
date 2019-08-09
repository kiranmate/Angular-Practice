

export class IotService {
  private rpm:number=0
 
  constructor() { }
  incr(){

    return ++ this.rpm
  }
  decr(){
  
    return -- this.rpm
  }
}
