import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LivroComponent } from "../../componentes/livro/livro.component";
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { LivroService } from '../../service/livro.service';
import { debounceTime, filter, map, switchMap, tap } from 'rxjs';
import { Item } from '../../models/interfaces';
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

  constructor(private livroService: LivroService) { }

  livrosEncontrados$ = this.campoBusca.valueChanges.pipe(
    debounceTime(300), // Aguarda 300ms após o último evento de digitação
    filter((valorDigitado: string) => valorDigitado.length > 2),
    tap(() => console.log('Fluxo inicial')),
    switchMap((valorDigitado: string) => this.livroService.buscar(valorDigitado)),
    tap((retornoAPI) => console.log(retornoAPI)),
    map((items: Item[]) => this.livrosResultadoParaLivros(items))
  )

  livrosResultadoParaLivros(items: Item[]): LivroVolumeInfo[] {
    return items.map((item: Item) => new LivroVolumeInfo(item));
  }
}



