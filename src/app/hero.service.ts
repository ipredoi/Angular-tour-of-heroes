import { Injectable } from '@angular/core';
import { Hero } from './hero'; // hero interface
import { HEROES } from './mock-heroes'; // aray mock
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor() {}
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
}
