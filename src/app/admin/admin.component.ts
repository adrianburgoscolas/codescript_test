import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NewServiceService } from "@app/new-service.service";

@Component({
  selector: "app-admin",
  imports: [],
  templateUrl: "./admin.component.html",
  styleUrl: "./admin.component.css",
})
export class AdminComponent {
  activatedRoute = inject(ActivatedRoute);
  newService = inject(NewServiceService);

  constructor() {
    console.log(this.newService.text, " at Admin component");
    this.activatedRoute.data.subscribe((value) => console.log(value));
  }
}
