import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes: Hero[] = [];
  selectedHero?:Hero;
  constructor(private heroService:HeroService, private messageService:MessageService){
  }
  ngOnInit(){
        this.getHeroes();
  }
  onSelect(hero:Hero):void{
    console.log(hero.name);
    this.messageService.add(`${hero.name} has been selected with ID: ${hero.id}`);
    this.selectedHero=hero;
  }
  getHeroes():void{
    this.heroService.getHeroes().subscribe(return_value => this.heroes = return_value);
  }
}
