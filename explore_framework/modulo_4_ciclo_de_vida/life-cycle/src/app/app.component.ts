import { Component, OnInit } from '@angular/core';
import { InputComponent } from "./components/input/input.component";
import { Item } from './interfaces/iItem';
import { ListaDeCompraService } from './service/lista-de-compra.service';
import { CommonModule } from '@angular/common';
import { ItemComponent } from "./components/item/item.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, InputComponent, ItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  listaDeCompras!: Item[];
  itemParaSerEditado!: Item;

  constructor(
    private listaDeCompraService: ListaDeCompraService
  ) {}

  // ngDoCheck(): void {
  //   console.log('DoCheck foi chamado')
  //   this.listaDeCompraService.atualizarLocalStorage();
  // }

  ngOnInit(): void {
    this.listaDeCompras = this.listaDeCompraService.getListaDeCompra();
    console.log(this.listaDeCompras)
  }

  onEditButton(item: Item) {
    this.itemParaSerEditado = item;
  }

  onDeleteButton(id: number) {
    const index = this.listaDeCompras.findIndex((item) => item.id === id);
    this.listaDeCompras.splice(index, 1);
  }

  limparLista(){
    this.listaDeCompras = [];
    localStorage.removeItem('items');
  }
}
