import { Component, input } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  standalone: true,
  imports: [],
  templateUrl: './cabecalho.html',
  styleUrl: './cabecalho.css',
})
export class CabecalhoComponent {
  src = input.required();
  alt = input.required();
}
