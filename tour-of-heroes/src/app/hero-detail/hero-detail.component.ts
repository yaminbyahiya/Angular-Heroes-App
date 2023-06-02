import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
import { MessageService } from '../message.service';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  hero?:Hero;
  constructor(private messageService: MessageService, private heroService:HeroService, private route:ActivatedRoute, private location:Location){}
  ngOnInit():void{
    this.getHeroes();
  }
  getHeroes(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe(result => this.hero = result); 
  }
  goBack():void{
    this.location.back();
  }
}
