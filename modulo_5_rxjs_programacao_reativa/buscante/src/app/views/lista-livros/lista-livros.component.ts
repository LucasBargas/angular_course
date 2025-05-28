import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LivroComponent } from "../../componentes/livro/livro.component";
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { LivroService } from '../../service/livro.service';
import { catchError, debounceTime, EMPTY, filter, map, of, switchMap, tap, throwError } from 'rxjs';
import { Item, LivrosResultado } from '../../models/interfaces';
import { LivroVolumeInfo } from '../../models/LivroVolumeInfo';

@Component({
  selector: 'app-lista-livros',
  standalone: true,
  imports: [CommonModule, LivroComponent, ReactiveFormsModule],
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent {
  campoBusca = new FormControl();
  mensagemErro: string = '';
  livrosResultado!: LivrosResultado;

  constructor(private livroService: LivroService) { }

  resultadoBusca$ = this.campoBusca.valueChanges.pipe(
    debounceTime(300), // Aguarda 300ms após o último evento de digitação
    filter((valorDigitado: string) => valorDigitado.length > 2),
    tap(() => console.log('Fluxo inicial')),
    switchMap((valorDigitado: string) => this.livroService.buscar(valorDigitado)),
  )

  totalDeLivros$ = this.resultadoBusca$.pipe(
    map((resultado) => this.livrosResultado = resultado),
    catchError((erro) => {
      console.error(erro);
      return of();
    })
  )

  livrosEncontrados$ = this.resultadoBusca$.pipe(
    tap((retornoAPI) => console.log(retornoAPI)),
    map(resultado => resultado.items ?? []),
    map((items: Item[]) => this.livrosResultadoParaLivros(items)),
    catchError((erro) => {
      // this.mensagemErro = 'Erro ao buscar livros. Recarregue a aplicação ou tente novamente mais tarde.';
      // return EMPTY;
      return throwError(() => new Error(this.mensagemErro = 'Erro ao buscar livros. Recarregue a aplicação ou tente novamente mais tarde.'));
    })
  )

  livrosResultadoParaLivros(items: Item[]): LivroVolumeInfo[] {
    return items.map((item: Item) => new LivroVolumeInfo(item));
  }
}



