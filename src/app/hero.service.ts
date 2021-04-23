import { Injectable } from '@angular/core';
import { Hero } from './hero'; // hero interface
import { HEROES } from './mock-heroes'; // aray mock
import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService:fetched heroes');
    return heroes;
  }
}
