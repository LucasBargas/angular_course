import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { Livro } from '../../models/interfaces';

const body = document.querySelector("body");

@Component({
  selector: 'app-modal-livro',
  imports: [CommonModule],
  templateUrl: './modal-livro.component.html',
  styleUrls: ['./modal-livro.component.css']
})
export class ModalLivroComponent {
  livro = input<Livro>();
  mudouModal = output<boolean>();
  statusModal: boolean = true;

  constructor() { }

  fecharModal() {
    this.statusModal = false
    this.mudouModal.emit(this.statusModal)
    body!.style.overflow = "scroll"
  }

  esconderScroll(){
    if(this.statusModal == true ) {
      body!.style.overflow = "hidden";
    }
  }

  lerPrevia() {
    window.open( '_blank');
  }

}
