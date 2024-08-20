import { Component, inject, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.scss'
})
export class ListPageComponent implements OnInit{

public heroes:Hero[] = [];

private heroesService = inject(HeroesService);

ngOnInit(): void {
  this.loadHeroes();
}

loadHeroes():void { 
  this.heroesService.getHeroes().subscribe((heroes:Hero[]) => {
    this.heroes = heroes;
  });
}

}
