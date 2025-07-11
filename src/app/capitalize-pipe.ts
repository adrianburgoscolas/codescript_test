import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "capitalize",
})
export class CapitalizePipe implements PipeTransform {
  transform(line: string): string {
    return line
      .split(" ")
      .map((word) => `${word.at(0)?.toUpperCase()}${word.slice(1)}`)
      .join(" ");
  }
}
