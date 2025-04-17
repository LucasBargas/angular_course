import { Component, Input, OnInit } from '@angular/core';
import { IThink } from 'src/app/interface/IThink';

@Component({
  selector: 'app-think',
  templateUrl: './think.component.html',
  styleUrls: ['./think.component.css']
})
export class ThinkComponent implements OnInit {
  @Input() think!: IThink; // Herdei o atributo da classe pai ListThinksComponent

  constructor() { }

  ngOnInit(): void {
  }

}
