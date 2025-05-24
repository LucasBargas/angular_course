import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

const body = document.querySelector("body");

@Component({
  selector: 'app-modal-livro',
  imports: [CommonModule],
  templateUrl: './modal-livro.component.html',
  styleUrls: ['./modal-livro.component.css']
})
export class ModalLivroComponent {
  @Input() livro!: Object;
  @Output() mudouModal = new EventEmitter();
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
