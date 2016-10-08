import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

import { Hero } from "./hero";
import { HeroService } from "./hero.service";

@Component({
  moduleId: module.id,
  selector: "my-dashboard",
  templateUrl: "dashboard.component.html",
  styleUrls: [ "dashboard.component.css" ]
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(
    private router: Router,
    private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1,5));
  }

  /* Define a heroes array property.
     Inject the HeroService in the constructor and hold it in a private heroService field.
     Call the service to get heroes inside the Angular ngOnInit lifecycle hook. */

  gotoDetail(hero: Hero): void {
    let link = ["/detail", hero.id];
    this.router.navigate(link);
  }
}
