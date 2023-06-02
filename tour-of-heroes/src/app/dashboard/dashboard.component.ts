import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  heroes:Hero[]=[];
  constructor(private heroService:HeroService){}
  ngOnInit():void{
    this.getHeroes();
  }
  getHeroes(){
    this.heroService.getHeroes().subscribe(result => this.heroes = result.slice(1,5));
  }
}
