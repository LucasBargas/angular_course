import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ModalLivroComponent } from '../../views/modal-livro/modal-livro.component';
import { Livro } from '../../models/interfaces';

@Component({
  selector: 'app-livro',
  imports: [CommonModule, ModalLivroComponent],
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent {
  @Input() livro!: Livro;
  modalAberto!: boolean;

  onModalChange(evento: boolean) {
    this.modalAberto = evento;
  }
}
