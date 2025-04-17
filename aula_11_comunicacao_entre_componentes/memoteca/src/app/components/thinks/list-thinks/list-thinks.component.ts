import { Component, OnInit } from '@angular/core';
import { IThink } from 'src/app/interface/IThink';

@Component({
  selector: 'app-list-thinks',
  templateUrl: './list-thinks.component.html',
  styleUrls: ['./list-thinks.component.css']
})
export class ListThinksComponent implements OnInit {
  listThinks: IThink[] = [
    {
      content: "Passo informações para o componente filho",
      autoria: "Componente pai",
      model: "modelo3"
    },
    {
      content: "Minha propriedade é decorado com @Input()",
      autoria: "Angular",
      model: "modelo1"
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
