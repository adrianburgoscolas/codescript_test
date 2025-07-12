import { Component, signal } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { InViewDirective } from "./in-view.directive";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, RouterLink, InViewDirective],
  templateUrl: "./app.html",
  styleUrl: "./app.css",
})
export class App {
  isScrolling = signal(false);
  onInView(isVisible: any) {
    this.isScrolling.set(isVisible);
  }
}
