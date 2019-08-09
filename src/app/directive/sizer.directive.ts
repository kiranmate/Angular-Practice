import { Directive, ElementRef, Renderer2, HostBinding, HostListener, Input } from '@angular/core';
import  { CommonModule} from '@angular/common';
@Directive({
  selector: '[appSizer]'
})
export class SizerDirective {

   @Input('appSizer')

   @HostBinding('style.border')
  private  border:string;

  @HostBinding('style.width.px')
  private  width:number;

  constructor(
   private elrf:ElementRef,
   private rend: Renderer2

  ) {
    elrf.nativeElement.style.border=`2px solid green` //not recommended
   rend.setStyle(elrf.nativeElement,'border','2px solid red')
   this.border="1px solid red"
   this.width=600

  }
  @HostListener('mouseenter')
  OnIn(){
    this.width=600
  }
  @HostListener('mouseleave')
  OnOut(){
    this.width=150

  }
  mobiles=['android','apple','honor','nokia','samsung'
]
}
