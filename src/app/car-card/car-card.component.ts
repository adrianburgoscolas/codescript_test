import { Component, input } from "@angular/core";
import { CapitalizePipe } from "../capitalize-pipe";

@Component({
  selector: "app-car-card",
  imports: [CapitalizePipe],
  templateUrl: "./car-card.component.html",
  styleUrl: "./car-card.component.css",
})
export class CarCardComponent {
  companyName = input.required<string>();
  companyCountry = input.required<string>();
  vehicleTypes = input.required<any>();
}
