import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../../features/heroes/interfaces/hero.interface';

@Component({
  selector: 'app-card-hero',
  templateUrl: './card-hero.component.html',
  styleUrl: './card-hero.component.scss'
})
export class CardHeroComponent implements OnInit{

  @Input() hero!: Hero;

  ngOnInit(): void {
    this.checkHero();
  }

  private checkHero(): void {
    if (!this.hero) {
      throw new Error('Attribute hero is required');
    }
  }

}
