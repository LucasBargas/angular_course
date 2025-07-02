import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TarefaService } from '../../service/tarefa.service';
import { CommonModule } from '@angular/common';
import { MensagemComponent } from "../../componentes/mensagem/mensagem.component";
import { Tarefa } from '../../interface/tarefa';

@Component({
  selector: 'app-lista-tarefas',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MensagemComponent],
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css']
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
  ) { }

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

  mostrarOuEsconderFormulario() {
    this.formAberto = !this.formAberto;
    this.resetarFormulario();
  }

  salvarTarefa() {
    if (this.formulario.value.id) {
      this.editarTarefa();
    } else {
      this.criarTarefa();
    }
  }

  editarTarefa() {
    this.service.editar(this.formulario.value).subscribe({
      next: () => {
        this.lista();
      }
    });
  }

  criarTarefa() {
    this.service.criar(this.formulario.value).subscribe();
  }

  excluirTarefa(id: number) {
    if (id) {
      this.service.excluir(id).subscribe({
        next: () => this.lista()
      });
    }
  }

  cancelar() {
    this.resetarFormulario();
    this.formAberto = false;
  }

  resetarFormulario() {
    this.formulario.reset();
  }

  carregarParaEditar(id: number) {
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

  finalizarTarefa(id: number) {
    this.service.buscarPorId(id).subscribe((tarefa) => {
      this.service.atualizarStatusTarefa(tarefa).subscribe(() => {
        this.lista();
      });
    });
  }

  lista() {
    this.service.listar(this.categoria).subscribe((listaTarefas) => {
      this.listaTarefas.set(listaTarefas);
    });
  }

  habilitarBotao(): string {
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
