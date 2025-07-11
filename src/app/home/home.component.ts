import {
  Component,
  computed,
  contentChild,
  inject,
  signal,
  viewChild,
} from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { Card } from "@app/card/card";
import { NewServiceService } from "@app/new-service.service";

@Component({
  selector: "app-home",
  imports: [Card, ReactiveFormsModule],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {
  person = new FormGroup({
    firstname: new FormControl(""),
    lastname: new FormControl(""),
    age: new FormControl(0),
  });
  onSubmit() {
    console.log(this.person.value);
  }
  constructor() {
    console.log(this.newService.text, " at Home component");
  }
  newService = inject(NewServiceService);
  protected title: string = "hello_world";
  protected cardInfo = { list: ["hola", "que", "tal"] };
  protected text: string = "Hola";
  appCounter = signal(0);
  onCardButtonClick(value: string) {
    console.log("card button clicked", value);
    this.appCounter.update((prev) => prev - 1);
  }
  cardView = viewChild(Card);
  cardName = computed(() => this.cardView()?.name);
}
