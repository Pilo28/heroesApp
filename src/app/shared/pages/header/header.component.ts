import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public sidebarItems = [
    { name: 'Listado',icon: 'label', route: './list' },
    { name: 'Añadir',icon: 'add', route: './new-hero' },
    { name: 'Buscar',icon: 'search', route: './search' }
  ]
}
