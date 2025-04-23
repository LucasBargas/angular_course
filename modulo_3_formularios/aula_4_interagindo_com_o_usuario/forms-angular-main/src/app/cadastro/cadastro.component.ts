import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { states } from '../data/states';
import { IStates } from '../interfaces/IStates';
import { NgForm } from '@angular/forms';

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

  cadastrar(form: NgForm): void {
    if (form.valid) {
      // this.router.navigate(['/sucesso']);
      console.log(form.controls);
      return;
    }

    // mostre todos o erro de todos os campos obrigatórios.
    Object.values(form.controls).forEach(control => {
      control.markAsTouched();
    });
    return;
  }
}
