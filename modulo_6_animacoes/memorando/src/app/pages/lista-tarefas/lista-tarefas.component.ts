import { Component, OnInit, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TarefaService } from '../../service/tarefa.service';
import { CommonModule } from '@angular/common';
import { MensagemComponent } from '../../componentes/mensagem/mensagem.component';
import { Tarefa } from '../../interface/tarefa';

@Component({
  selector: 'app-lista-tarefas',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MensagemComponent],
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css'],
})
export class ListaTarefasComponent implements OnInit {
  listaTarefas = signal<Tarefa[]>([]);
  formAberto: boolean = false;
  categoria: string = '';
  validado: boolean = false;

  formulario!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: TarefaService,
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
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
    const tarefa: Tarefa = this.formulario.value;
    this.service.editar(tarefa).subscribe({
      next: () => {
        this.lista();
        this.cancelar();
      },
    });
  }

  criarTarefa(): void {
    this.service.criar(this.formulario.value).subscribe();
  }

  excluirTarefa(id: number): void {
    if (id) {
      this.service.excluir(id).subscribe({
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
    this.service.buscarPorId(id).subscribe((tarefa) => {
      this.formulario = this.formBuilder.group({
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
    this.service.buscarPorId(id).subscribe((tarefa) => {
      this.service.atualizarStatusTarefa(tarefa).subscribe(() => {
        this.lista();
      });
    });
  }

  lista(): void {
    this.service.listar(this.categoria).subscribe((listaTarefas) => {
      this.listaTarefas.set(listaTarefas);
    });
  }

  get habilitarBotao(): string {
    return this.formulario.valid ? 'botao-salvar' : 'botao-desabilitado';
  }

  campoValidado(campoAtual: string): string {
    const campo = this.formulario.get(campoAtual);
    if (campo?.errors && campo?.touched) {
      this.validado = false;
      return 'form-tarefa input-invalido';
    } else {
      this.validado = true;
      return 'form-tarefa';
    }
  }
}
