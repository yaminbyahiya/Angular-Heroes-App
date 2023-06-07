import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService:MessageService, private httpClient: HttpClient) { }
  getHero(id:number):Observable<Hero>{
    const hero = this.httpClient.get<Hero>('http://127.0.0.1:5000/detail/' + id.toString());
    this.messageService.add(`Selected hero with ID: ${id}`);
    return hero;
  }
  getHeroes():Observable<Hero[]>{
    const heroes = this.httpClient.get<Hero[]>('http://127.0.0.1:5000/heroes');
    this.messageService.add("Hero Service Fetched Hero Data");
    return heroes;
  }
}
