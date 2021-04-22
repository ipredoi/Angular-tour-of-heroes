import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = []; // state empty array

  selectedHero?: Hero; // equivalent with ?? selectedHero: Hero

  constructor(private heroService: HeroService) {}
  setHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
   ;
  }
  onSelect(arg: Hero): void {
    this.selectedHero = arg;
    // console.log(this.selectedHero);
  }

  ngOnInit(): void {
    this.setHeroes();
  }
}
