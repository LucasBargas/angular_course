import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho';
import { CommonModule } from '@angular/common';
import { RodapeComponent } from './componentes/rodape/rodape';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CabecalhoComponent,
    RodapeComponent,
    CommonModule,
    RouterOutlet,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'organo';
}
