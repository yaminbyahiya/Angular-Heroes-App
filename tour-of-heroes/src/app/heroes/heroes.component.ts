import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes: Hero[] = [];
  selectedHero?:Hero;
  constructor(private heroService:HeroService){
  }
  ngOnInit(){
        this.getHeroes();
  }
  onSelect(hero:Hero):void{
    console.log(hero.name);
    this.selectedHero=hero;
  }
  getHeroes():void{
    this.heroes=this.heroService.getHeroes();
  }
}
