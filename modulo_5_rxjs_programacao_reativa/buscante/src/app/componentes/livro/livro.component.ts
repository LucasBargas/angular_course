import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ModalLivroComponent } from '../../views/modal-livro/modal-livro.component';

@Component({
  selector: 'app-livro',
  imports: [CommonModule, ModalLivroComponent],
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent {
  @Input() livro!: Object;
  modalAberto!: boolean;

  onModalChange(evento: boolean) {
    this.modalAberto = evento;
  }
}
