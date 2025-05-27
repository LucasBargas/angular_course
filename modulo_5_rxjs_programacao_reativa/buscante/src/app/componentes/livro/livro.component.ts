import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { ModalLivroComponent } from '../../views/modal-livro/modal-livro.component';
import { Livro } from '../../models/interfaces';
import { AutoriaPipe } from '../../pipes/autoria.pipe';
import { EditoraPipe } from '../../pipes/editora.pipe';

@Component({
  selector: 'app-livro',
  standalone: true,
  imports: [CommonModule, ModalLivroComponent, AutoriaPipe, EditoraPipe],
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
