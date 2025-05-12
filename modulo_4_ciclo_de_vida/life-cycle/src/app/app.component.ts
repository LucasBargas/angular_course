import { Component } from '@angular/core';
import { InputComponent } from "./components/input/input.component";
import { Item } from './interfaces/iItem';
import { ListaDeCompraService } from './service/lista-de-compra.service';

@Component({
  selector: 'app-root',
  imports: [InputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  listaDeCompras!: Item[];

  constructor(
    private listaDeCompraService: ListaDeCompraService
  ) {}


  ngOnInit(): void {
    this.listaDeCompras = this.listaDeCompraService.getListaDeCompra();
    console.log(this.listaDeCompras)
  }
}
