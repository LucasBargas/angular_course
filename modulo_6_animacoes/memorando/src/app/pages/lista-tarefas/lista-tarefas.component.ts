import { Component, inject, OnInit, signal } from '@angular/core';
import {
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { TarefaService } from '../../service/tarefa.service';
import { CommonModule } from '@angular/common';
import { MensagemComponent } from '../../componentes/mensagem/mensagem.component';
import { Tarefa } from '../../interface/tarefa';
import { state, style, trigger } from '@angular/animations';

@Component({
  selector: 'app-lista-tarefas',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MensagemComponent],
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css'],
  animations: [
    trigger('highlightedState', [
      state(
        'default',
        style({
          border: '2px solid #b2b6ff',
          filter: 'brightness(100%)',
        }),
      ),
      state(
        'highlighted',
        style({
          border: '4px solid #b2b6ff',
          filter: 'brightness(95%)',
        }),
      ),
    ]),
  ],
})
export class ListaTarefasComponent implements OnInit {
  private _formBuilder = inject(FormBuilder);
  private _service = inject(TarefaService);
  listaTarefas = signal<Tarefa[]>([]);
  formAberto: boolean = false;
  categoria: string = '';
  validado: boolean = false;
  formulario!: FormGroup;
  indexTarefa = -1;

  ngOnInit(): void {
    this.formulario = this._formBuilder.group({
      id: [0],
      descricao: ['', Validators.required],
      statusFinalizado: [false, Validators.required],
      categoria: ['', Validators.required],
      prioridade: ['', Validators.required],
    });

    this.lista();
  }

  mostrarOuEsconderFormulario(): void {
    this.formAberto = !this.formAberto;
    this.resetarFormulario();
  }

  salvarTarefa(): void {
    if (this.formulario.value.id) {
      this.editarTarefa();
    } else {
      this.criarTarefa();
    }
  }

  editarTarefa(): void {
    this._service.editar(this.formulario.value).subscribe({
      next: () => {
        this.lista();
      },
    });
  }

  criarTarefa(): void {
    this._service.criar(this.formulario.value).subscribe(() => {
      this.lista(); // Opcional: atualizar lista ao criar
    });
  }

  excluirTarefa(id: number): void {
    if (id) {
      this._service.excluir(id).subscribe({
        next: () => this.lista(),
      });
    }
  }

  cancelar(): void {
    this.resetarFormulario();
    this.formAberto = false;
  }

  resetarFormulario(): void {
    this.formulario.reset();
  }

  carregarParaEditar(id: number): void {
    this._service.buscarPorId(id).subscribe((tarefa) => {
      this.formulario = this._formBuilder.group({
        id: [tarefa.id],
        descricao: [tarefa.descricao],
        categoria: [tarefa.categoria],
        statusFinalizado: [tarefa.statusFinalizado],
        prioridade: [tarefa.prioridade],
      });
    });
    this.formAberto = true;
  }

  finalizarTarefa(id: number): void {
    this._service.buscarPorId(id).subscribe((tarefa) => {
      this._service.atualizarStatusTarefa(tarefa).subscribe(() => {
        this.lista();
      });
    });
  }

  lista(): void {
    this._service.listar(this.categoria).subscribe((listaTarefas) => {
      this.listaTarefas.set(listaTarefas);
    });
  }

  habilitarBotao(): string {
    return this.formulario.valid ? 'botao-salvar' : 'botao-desabilitado';
  }

  campoValidado(campoAtual: string): string {
    const campo = this.formulario.get(campoAtual);
    if (campo?.touched && campo?.invalid) {
      return 'campo-invalido';
    }
    return '';
  }
}
