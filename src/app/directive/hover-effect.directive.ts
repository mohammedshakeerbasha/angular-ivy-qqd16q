import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverEffect]'
})
export class HoverEffectDirective {
  bold: boolean;
  border: boolean;

  constructor(private el: ElementRef) { 
   
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight("")
    if(this.border){
      this.highlight('2px solid blue')
    }
    if(this.bold){
      this.highlight('bold');  
    }else{
      this.highlight('underline');  
    }
    
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');        
  }

  private highlight(color: string) {
 

    if(this.el.nativeElement.classList.contains("tag")){
      this.bold = true;
      this.el.nativeElement.style.fontWeight = color;
    }else{
      this.bold = false;
      this.el.nativeElement.style.textDecoration = color;
    }
   
  }

}
