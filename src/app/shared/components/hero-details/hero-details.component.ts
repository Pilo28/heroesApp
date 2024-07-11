import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../../features/heroes/interfaces/hero.interface';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrl: './hero-details.component.scss'
})
export class HeroDetailsComponent implements OnInit{

  @Input() hero!: Hero;

  ngOnInit(): void {
    this.checkHero();
  }

  private checkHero(): void {
    if (!this.hero) {
      throw new Error('Hero is required');
    }
  }
}
