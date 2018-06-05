import { Directive } from '@angular/core';
import { ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[Hightlight],.Hightlight'
})
export class HightlightDirective {

  constructor(private el: ElementRef) {
    // this.el.nativeElement.style.backgroundColor='yellow';
  }
  @HostListener('mouseover') onmouseover() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }
  @HostListener('mouseout') onmouseout() {
    this.el.nativeElement.style.backgroundColor = null;
  }
}
