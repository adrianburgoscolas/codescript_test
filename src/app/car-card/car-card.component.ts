import { Component, input } from "@angular/core";

@Component({
  selector: "app-car-card",
  imports: [],
  templateUrl: "./car-card.component.html",
  styleUrl: "./car-card.component.css",
})
export class CarCardComponent {
  companyName = input("");
  companyCountry = input("");
  vehicleTypes = input<any>([]);
}
