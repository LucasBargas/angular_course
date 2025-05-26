import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { LivroComponent } from "../../componentes/livro/livro.component";
import { FormsModule } from '@angular/forms';
import { LivroService } from '../../service/livro.service';
import { Subscription } from 'rxjs';
import { Item, Livro } from '../../models/interfaces';

@Component({
  selector: 'app-lista-livros',
  imports: [CommonModule, LivroComponent, FormsModule],
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent implements OnDestroy {
  private subscription: Subscription | null = null;
  listaLivros: Livro[] = [];
  campoBusca: string = '';

  constructor(private livroService: LivroService) { }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onSubmit() {
    this.subscription = this.livroService.buscar(this.campoBusca).subscribe(
      {
        next: items => {
          this.listaLivros = this.livrosResultadoParaLivros(items);
        },
        error: erro => console.error('Erro ao buscar livros:', erro),
      }
    )

    this.campoBusca = '';
  }

  livrosResultadoParaLivros(items: Item[]): Livro[] {
    return items.map((item: Item) => {
      const volumeInfo = item.volumeInfo;

      return {
        title: volumeInfo?.title,
        authors: volumeInfo?.authors,
        publisher: volumeInfo?.publisher,
        publishedDate: new Date(volumeInfo?.publishedDate),
        description: volumeInfo?.description,
        previewLink: volumeInfo?.infoLink,
        thumbnail: volumeInfo?.imageLinks?.thumbnail
      };
    });
  }
}



