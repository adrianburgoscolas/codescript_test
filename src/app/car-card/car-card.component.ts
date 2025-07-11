import { Component, input } from "@angular/core";

@Component({
  selector: "app-car-card",
  imports: [],
  templateUrl: "./car-card.component.html",
  styleUrl: "./car-card.component.css",
})
export class CarCardComponent {
  vehicleName = input("");
  vehicleCountry = input("");
  vehicleTypes = input<any>([]);
}
