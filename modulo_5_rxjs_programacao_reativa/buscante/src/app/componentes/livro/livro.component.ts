import { CommonModule } from '@angular/common';
import { Component, input, Input } from '@angular/core';
import { ModalLivroComponent } from '../../views/modal-livro/modal-livro.component';
import { Livro } from '../../models/interfaces';

@Component({
  selector: 'app-livro',
  imports: [CommonModule, ModalLivroComponent],
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent {
  livro = input.required<Livro>();
  modalAberto!: boolean;

  onModalChange(evento: boolean) {
    this.modalAberto = evento;
  }
}
