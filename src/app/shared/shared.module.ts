import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { HeaderComponent } from './pages/header/header.component';
import { MaterialModule } from '../utils/material/material.module';
import { RouterModule } from '@angular/router';
import { CardHeroComponent } from './components/card-hero/card-hero.component';





@NgModule({
  declarations: [
    ErrorPageComponent,
    HeaderComponent,
    CardHeroComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [ ErrorPageComponent, HeaderComponent, CardHeroComponent]
})
export class SharedModule { }
