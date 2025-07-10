import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { LivroComponent } from '../../componentes/livro/livro';
import { GeneroLiterario, Livro } from '../../models/livro.models';
import { LivroService } from '../../services/livro.service';

@Component({
  selector: 'app-lista-livros',
  standalone: true,
  imports: [LivroComponent, CommonModule, RouterLink],
  templateUrl: './lista-livros.html',
  styleUrl: './lista-livros.css',
})
export class ListaLivrosComponent implements OnInit {
  livros: Livro[] = [];
  generos: GeneroLiterario[] = [];

  constructor(public livroService: LivroService) {}

  ngOnInit(): void {
    this.generos = this.livroService.generos;
  }
}
