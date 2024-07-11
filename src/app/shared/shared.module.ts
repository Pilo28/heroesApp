import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { HeaderComponent } from './pages/header/header.component';
import { MaterialModule } from '../utils/material/material.module';
import { RouterModule } from '@angular/router';
import { CardHeroComponent } from './components/card-hero/card-hero.component';
import { ImgHeroPipe } from './pipes/img-hero/img-hero.pipe';
import { HeroDetailsComponent } from './components/hero-details/hero-details.component';





@NgModule({
  declarations: [
    ErrorPageComponent,
    HeaderComponent,
    CardHeroComponent,
    ImgHeroPipe,
    HeroDetailsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [ ErrorPageComponent, HeaderComponent, CardHeroComponent, ImgHeroPipe, HeroDetailsComponent]
})
export class SharedModule { }
