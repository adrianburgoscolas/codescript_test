import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class NewServiceService {
  text: string = "New service";

  constructor() {}
}
