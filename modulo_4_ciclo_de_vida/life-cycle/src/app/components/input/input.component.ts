import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListaDeCompraService } from '../../service/lista-de-compra.service';
import { Item } from '../../interfaces/iItem';

@Component({
  selector: 'app-input',
  imports: [CommonModule, FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent implements OnInit, OnChanges {
  @Input() itemQueVaiSerEditado!: Item;
  valorItem!: string;

  constructor(
    private listaDeCompraService: ListaDeCompraService
  ) {}

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['itemQueVaiSerEditado'].firstChange) {
      this.valorItem = this.itemQueVaiSerEditado?.nome;
    }
  }

  onSubmit() {
    this.listaDeCompraService.postItem(this.valorItem);
    this.valorItem = '';
  }
}
