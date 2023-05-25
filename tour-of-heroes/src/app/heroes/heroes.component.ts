import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes = HEROES;
  selectedHero?:Hero;
  hero:Hero = {
    id:1,
    name: "Iron Man"
  }
  onSelect(hero:Hero):void{
    console.log(hero.name);
    this.selectedHero=hero;
  }
}
