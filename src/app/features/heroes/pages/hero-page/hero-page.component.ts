import { Component, inject, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from '../../interfaces/hero.interface';
import { delay, switchMap } from 'rxjs';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.scss'
})
export class HeroPageComponent implements OnInit{
  
  public hero?: Hero;

  private heroService = inject(HeroesService);
  private acivateRoute = inject(ActivatedRoute);
  private router = inject(Router);

  ngOnInit(): void {
    this.loadHero();
  }
  private loadHero(): void {
    this.acivateRoute.params // Corregido el nombre aquí
      .pipe(
        delay(1000),
        switchMap(({ id }) => this.heroService.getHeroById(id))
      )
      .subscribe(hero => {
        if (!hero) {
          this.router.navigate(['/heroes/list']);
          return;
        }
        this.hero = hero;
      });
  }
}
