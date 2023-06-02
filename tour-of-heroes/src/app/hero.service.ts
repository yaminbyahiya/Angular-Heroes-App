import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService:MessageService) { }
  getHero(id:number):Observable<Hero>{
    const hero = HEROES.find(result => result.id == id)!;
    this.messageService.add(`Selected hero with ID: ${id}`);
    return of(hero);
  }
  getHeroes():Observable<Hero[]>{
    const heroes = of(HEROES);
    this.messageService.add("Hero Service Fetched Hero Data");
    return heroes;
  }
}
