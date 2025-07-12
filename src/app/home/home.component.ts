import { Component, inject, signal } from "@angular/core";
import { CarCardComponent } from "../car-card/car-card.component";
import { CardService } from "@app/card.service";
import { CARS_API_URL } from "@app/constants";

@Component({
  selector: "app-home",
  imports: [CarCardComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {
  carsService = inject(CardService);
  carsList = signal<Car[]>([]);
  ngOnInit() {
    this.carsService.getCarsList(CARS_API_URL, this.carsList);
  }
}
