import { Component } from "@angular/core";

export class Hero {
  id: number;
  name: string;
}
// @Component decorator associates metadata with the AppComponent
@Component({
  selector: "my-app",
  template: "<h1>{{title}}</h1><h2>{{hero.name}} details!</h2>"
  // read the title and hero properties from AppComponent and render them
})

export class AppComponent {
  title = "Tour of Heroes";
  hero: Hero = {
    id: 1,
    name: "Windstorm"
  };
}
