import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListaDeCompraService } from '../../service/lista-de-compra.service';

@Component({
  selector: 'app-input',
  imports: [CommonModule, FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent implements OnInit {
  valorItem!: string;

  constructor(
    private listaDeCompraService: ListaDeCompraService
  ) { }

  ngOnInit(): void { }

  onSubmit() {
    this.listaDeCompraService.postItem(this.valorItem);
    this.valorItem = '';
  }
}
