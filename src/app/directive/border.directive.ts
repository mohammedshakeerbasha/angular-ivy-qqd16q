import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBorder]'
})
export class BorderDirective {

  constructor(private el: ElementRef) {
    
   }

   @HostListener('mouseenter') onMouseEnter() {
     this.borderHighlight("");
    this.borderHighlight('2px solid blue');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.borderHighlight('');
  }
  
  private borderHighlight(color: string) {
    if(this.el.nativeElement.classList.contains("firstcard") | this.el.nativeElement.classList.contains("lastcard")){   
      this.el.nativeElement.style.border = color;
    }else{
      
    }
   
  }

}
