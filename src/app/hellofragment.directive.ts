import { Directive, ElementRef, HostListener, inject } from "@angular/core";

@Directive({
  selector: "[appHellofragment]",
})
export class HellofragmentDirective {
  element = inject(ElementRef);

  @HostListener("mouseleave") onMouseLeave() {
    this.element.nativeElement.style.backgroundColor = "#fff";
  }
  @HostListener("mouseenter") onMouseEnter() {
    this.element.nativeElement.style.backgroundColor = "#b1b1b1";
  }
}
