import { livros } from '../mock-livros';
import { Livro } from '../models/livro.models';
import { LivroService } from './livro.service';

describe('LivroService', () => {
  let service: LivroService;

  it('deveria ser criado', () => {
    service = new LivroService();
    expect(service).toBeTruthy();
  });

  it('deveria adicionar um novo', () => {
    service = new LivroService();

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
    service = new LivroService();
    const livrosPorGenero = service.obterLivrosPorGenero('romance');
    const livrosEsperados = livros.filter(
      (livro) => livro.genero.id === 'romance',
    );

    expect(livrosPorGenero).toEqual(livrosEsperados);
  });
});
