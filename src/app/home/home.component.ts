import { Component } from "@angular/core";
import { CarCardComponent } from "../car-card/car-card.component";

@Component({
  selector: "app-home",
  imports: [CarCardComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {}
