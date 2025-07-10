import { Routes } from '@angular/router';

import { FormularioComponent } from './paginas/formulario/formulario';
import { ListaLivrosComponent } from './paginas/lista-livros/lista-livros';

export const routes: Routes = [
  {
    path: 'formulario',
    component: FormularioComponent,
  },
  {
    path: 'lista-livros',
    component: ListaLivrosComponent,
  },
  {
    path: '**',
    component: ListaLivrosComponent,
  },
];
