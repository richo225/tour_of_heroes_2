import { Injectable } from "@angular/core";
import { Hero } from "./hero"
import { HEROES } from "./mock-heroes"

@Injectable()
// Decorator emits metadata about the hero service
// Angular may need this to inject other dependencies into the service in the future.
export class HeroService {

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
}
