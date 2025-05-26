import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LivroComponent } from "../../componentes/livro/livro.component";
import { FormsModule } from '@angular/forms';
import { LivroService } from '../../service/livro.service';

@Component({
  selector: 'app-lista-livros',
  imports: [CommonModule, LivroComponent, FormsModule],
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent {
  listaLivros: [] = [];
  campoBusca: string = '';
  error = '';

  constructor(private livroService: LivroService) { }

  buscarLivros() {
    this.livroService.buscar(this.campoBusca).subscribe(
      {
        next: retornoAPI => console.log(retornoAPI),
        error: erro => console.error('Erro ao buscar livros:', erro),
        complete: () => console.log('Busca de livros concluída')
      }
    )
  }
}



