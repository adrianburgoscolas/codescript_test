import { Directive, ElementRef, input, output } from "@angular/core";

@Directive({
  selector: "[appInView]",
})
export class InViewDirective {
  inView = output<boolean>();
  threshold = input.required<number | number[] | undefined>();

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        this.inView.emit(entry.isIntersecting);
      },
      {
        threshold: this.threshold(),
      },
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
