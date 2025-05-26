import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { LivroComponent } from "../../componentes/livro/livro.component";
import { FormsModule } from '@angular/forms';
import { LivroService } from '../../service/livro.service';
import { Subscription } from 'rxjs';
import { Item } from '../../models/interfaces';

@Component({
  selector: 'app-lista-livros',
  imports: [CommonModule, LivroComponent, FormsModule],
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent implements OnDestroy {
  private subscription: Subscription | null = null;
  listaLivros = [];
  campoBusca: string = '';

  constructor(private livroService: LivroService) { }

  buscarLivros() {
    this.subscription = this.livroService.buscar(this.campoBusca).subscribe(
      {
        next: retornoAPI => console.log(),
        error: erro => console.error('Erro ao buscar livros:', erro),
        complete: () => console.log('Busca de livros concluída')
      }
    )
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}



