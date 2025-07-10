import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { GeneroLiterario, Livro } from '../../models/livro.models';
import { LivroService } from '../../services/livro.service';
import { AvaliacaoEstrelasComponent } from '../../componentes/avaliacao-estrelas/avaliacao-estrelas';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule, AvaliacaoEstrelasComponent, RouterLink],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class FormularioComponent implements OnInit {
  formulario!: FormGroup;
  livros: Livro[] = [];
  generos: GeneroLiterario[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private livroService: LivroService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      titulo: [''],
      autoria: [''],
      imagem: [''],
      genero: [''],
      dataLeitura: [''],
      classificacao: [null],
    });
    this.generos = this.livroService.generos;
  }

  adicionarLivro(): void {
    const novoLivro = {
      ...this.formulario.value,
      genero: this.generos.find((g) => g.id === this.formulario.value.genero),
    };

    this.livroService.adicionarLivro(novoLivro);
    this.formulario.reset();
    this.router.navigate(['lista-livros']);
  }
}
