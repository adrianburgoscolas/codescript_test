import { HttpClient } from "@angular/common/http";
import { inject, Injectable, WritableSignal } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CardService {
  http = inject(HttpClient);

  getName(): string {
    return "pepe";
  }

  greets(name: string): string {
    return `hello ${name}`;
  }

  getPokemonsNameList(
    url: string,
    limit: number,
    itemsList: WritableSignal<Array<any>>,
  ): void {
    this.http.get<any>(url).subscribe((cars) => {
      itemsList.set(cars.Results);
    });
    // const res = await fetch(`${url}/?limit=${limit}`);
    // const pokemons = await res.json();
    // this.pokemonsNameList.set(
    //   pokemons.results.map((pokemon: any) => pokemon.name),
    // );
  }
}
