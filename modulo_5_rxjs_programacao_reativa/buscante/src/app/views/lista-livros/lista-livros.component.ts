import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LivroComponent } from "../../componentes/livro/livro.component";

@Component({
  selector: 'app-lista-livros',
  imports: [CommonModule, LivroComponent],
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent {
  listaLivros!: [];
}



