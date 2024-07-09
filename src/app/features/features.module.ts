import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { HeroPageComponent } from './heroes/pages/hero-page/hero-page.component';
import { LayoutPageComponent } from './heroes/pages/layout-page/layout-page.component';
import { ListPageComponent } from './heroes/pages/list-page/list-page.component';
import { NewPageComponent } from './heroes/pages/new-page/new-page.component';
import { SearchPageComponent } from './heroes/pages/search-page/search-page.component';

@NgModule({
  declarations: [
    HeroPageComponent,
    LayoutPageComponent,
    ListPageComponent,
    NewPageComponent,
    SearchPageComponent,
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ]
})
export class FeaturesModule { }
