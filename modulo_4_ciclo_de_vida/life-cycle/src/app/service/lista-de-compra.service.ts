import { Item } from '../interfaces/iItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaDeCompraService {

  private listaDeCompra!: Item[];

  constructor() {
    this.listaDeCompra = JSON.parse(localStorage.getItem('items') || '[]');
  }

  getListaDeCompra(){
    return this.listaDeCompra;
  }

  postItem(nomeDoItem: string) {
    const item = this.criaItem(nomeDoItem);
    this.listaDeCompra.push(item);
    // this.listaDeCompra = [...this.listaDeCompra, item];
  }

  criaItem(nomeDoIten: string) {
    const id = this.listaDeCompra.length + 1;
    const item: Item = {
      id,
      nome: nomeDoIten,
      data: new Date().toLocaleString('pt-BR'),
      comprado: false
    }

    return item;
  }

  editarItemDaLista(itemAntigo: Item, nomeEditadoDoItem: string) {
    const itemEditado: Item = {
      id: itemAntigo.id,
      nome: nomeEditadoDoItem,
      data: itemAntigo.data,
      comprado: itemAntigo.comprado
    }

    const id = itemAntigo.id;
    this.listaDeCompra.splice(Number(id) - 1, 1, itemEditado);
  }
}
