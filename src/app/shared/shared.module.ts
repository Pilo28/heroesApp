import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { HeaderComponent } from './pages/header/header.component';
import { MaterialModule } from '../utils/material/material.module';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    ErrorPageComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [ ErrorPageComponent, HeaderComponent]
})
export class SharedModule { }
