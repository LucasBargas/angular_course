import { TestBed } from '@angular/core/testing';
import { livros } from '../mock-livros';
import { GeneroLiterario, Livro } from '../models/livro.models';
import { ErroGeneroLiterario, LivroService } from './livro.service';

describe('LivroService', () => {
  let service: LivroService;

  // Run before each test
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [LivroService] });
    service = TestBed.inject(LivroService);
  });

  it('deveria ser criado', () => {
    expect(service).toBeTruthy();
  });

  it('deveria adicionar um novo', () => {
    const novoLivro: Livro = {
      titulo: 'Novo Livro',
      autoria: 'Autor Desconhecido',
      imagem: 'http://example.com/cover.jpg',
      genero: { id: 'romance', value: 'Romance' },
      dataLeitura: '2025-07-12',
      classificacao: 5,
    };

    service.adicionarLivro(novoLivro);
    const livrosPorGenero = service.obterLivrosPorGenero('romance');
    expect(livrosPorGenero).toContain(novoLivro);
  });

  it('deveria retornar livros por genero', () => {
    const livrosPorGenero = service.obterLivrosPorGenero('romance');
    const livrosEsperados = livros.filter(
      (livro) => livro.genero.id === 'romance',
    );

    expect(livrosPorGenero).toEqual(livrosEsperados);
  });

  it('deveria inicializar os generos corretamente', () => {
    const generosEsperados: GeneroLiterario[] = [
      {
        id: 'romance',
        value: 'Romance',
      },
      {
        id: 'misterio',
        value: 'Mistério',
      },
      {
        id: 'fantasia',
        value: 'Fantasia',
      },
      {
        id: 'ficcao-cientifica',
        value: 'Ficção Científica',
      },
      {
        id: 'tecnicos',
        value: 'Técnicos',
      },
    ];

    expect(service.generos).toEqual(generosEsperados);
  });

  it('deveria lançar um erro ao tentar cadastrar um livro com genero desconhecido', () => {
    const novoLivro: Livro = {
      titulo: 'Novo Livro',
      autoria: 'Autor Desconhecido',
      imagem: 'http://example.com/cover.jpg',
      genero: { id: 'nao-existe', value: 'Não Existe' },
      dataLeitura: '2025-07-12',
      classificacao: 5,
    };

    expect(() => service.adicionarLivro(novoLivro)).toThrow(
      ErroGeneroLiterario,
    );
  });
});
