import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
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
  @ViewChild('input') inputRef!: ElementRef;
  editando = false;
  textBtn = 'Salvar item';
  @Input() itemQueVaiSerEditado!: Item;
  valorItem!: string;

  constructor(
    private listaDeCompraService: ListaDeCompraService
  ) {}

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['itemQueVaiSerEditado'].firstChange) {
      this.valorItem = this.itemQueVaiSerEditado?.nome;
      this.editando = true;
      this.textBtn = "Editar item";
    }
  }

  editarItem() {
    this.inputRef.nativeElement.focus();
    if (this.valorItem.length < 2) return;
    this.listaDeCompraService.editarItemDaLista(this.itemQueVaiSerEditado, this.valorItem);
    this.valorItem = '';
    this.editando = false;
    this.textBtn = 'Salvar item';
  }

  onSubmit() {
    this.inputRef.nativeElement.focus();
    if (this.valorItem.length < 2) return;
    this.listaDeCompraService.postItem(this.valorItem);
    this.valorItem = '';
  }
}
