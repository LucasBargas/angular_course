import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { states } from '../data/states';
import { IStates } from '../interfaces/IStates';
import { NgForm } from '@angular/forms';
import { CepService } from '../services/cep.service';
import { IAddress } from '../interfaces/IAddress';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  states: IStates[] =  states;

  constructor(private router: Router, private service: CepService) { }

  ngOnInit(): void {

  }

  consultaCep(e: any, f: NgForm) {
    const cep = e.target.value;
    if (cep === '') return;

    this.service.getConsultaCep(cep).subscribe((res) => {
      this.populandoEndereco(res, f);
      console.log(res);
    });
  }

  populandoEndereco(res: IAddress, f: NgForm) {
    f.form.patchValue({
      endereco: res.logradouro, 
      bairro: res.bairro,
      cidade: res.localidade,
      estado: res.uf,
    });
  }

  cadastrar(form: NgForm): void {
    if (form.valid) {
      this.router.navigate(['/sucesso']);
      return;
    }

    // mostre todos os erros de todos os campos obrigatórios.
    Object.values(form.controls).forEach(control => {
      control.markAsTouched();
    });
    return;
  }
}
