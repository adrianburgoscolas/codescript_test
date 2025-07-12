import {
  Component,
  contentChild,
  ElementRef,
  inject,
  input,
  model,
  output,
  signal,
  TemplateRef,
  viewChild,
} from "@angular/core";
import { CardInfo } from "../card-info";
import { CommonModule } from "@angular/common";
import { CardService } from "../card.service";
import { POKEMONS_API_URL, POKEMONS_DEFAULT_NUMBER } from "../constants";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { CapitalizePipe } from "@app/capitalize-pipe";
import { HellofragmentDirective } from "@app/hellofragment.directive";

@Component({
  selector: "app-card",
  imports: [
    CommonModule,
    CapitalizePipe,
    HellofragmentDirective,
    ReactiveFormsModule,
  ],
  templateUrl: "./card.html",
  styleUrl: "./card.css",
})
export class Card {
  helloFragment = viewChild("helloFragment", { read: TemplateRef });

  cardService = inject(CardService);

  cardLimitForm = new FormControl(20);
  pokemonsNameList = signal<any[]>([]);
  constructor() {
    this.cardLimitForm.valueChanges.subscribe((limit) => {
      this.cardService.getPokemonsNameList(
        POKEMONS_API_URL,
        limit ?? POKEMONS_DEFAULT_NUMBER,
        this.pokemonsNameList,
      );
    });
  }
  ngOnInit() {
    this.cardService.getPokemonsNameList(
      POKEMONS_API_URL,
      POKEMONS_DEFAULT_NUMBER,
      this.pokemonsNameList,
    );
  }

  // Component inputs and outputs
  info = input.required<CardInfo>();
  text = input.required<string>();
  buttonClick = output<string>();
  counter = model(0);

  name: string = this.cardService.getName();
  greeting: string = this.cardService.greets(this.name);
  count() {
    this.counter.update((prev) => prev + 1);
  }

  textInputHandler(value: string) {
    console.log(value);
  }

  formHandler = null;

  showFragment!: TemplateRef<unknown> | undefined;
  showFragmentHandler() {
    if (this.showFragment) {
      this.showFragment = undefined;
    } else {
      this.showFragment = this.helloFragment();
    }
  }
  cardContent = contentChild("spanContent", { read: ElementRef });
  ngAfterContentInit() {
    console.log(this.cardContent()?.nativeElement.text);
  }
}
