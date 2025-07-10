import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { Livro } from '../../models/livro.models';
import { AvaliacaoEstrelasComponent } from '../avaliacao-estrelas/avaliacao-estrelas';

@Component({
  selector: 'app-livro',
  standalone: true,
  imports: [CommonModule, AvaliacaoEstrelasComponent],
  templateUrl: './livro.html',
  styleUrl: './livro.css',
})
export class LivroComponent {
  livro = input.required<Livro>();
}
