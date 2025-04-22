import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { states } from '../data/states';
import { IStates } from '../interfaces/IStates';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  states: IStates[] =  states;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cadastrar(){
    console.log('Formulário enviado');
  }
}
