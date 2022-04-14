import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appQuote]'
})
export class QuoteDirective {

  constructor(private elem: ElementRef) {elem.nativeElement.style.background ="yellow" }


}
