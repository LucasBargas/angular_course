import { Routes } from '@angular/router';
import { ListaTarefasComponent } from './pages/lista-tarefas/lista-tarefas.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'lista-de-tarefas',
    pathMatch: 'full',
    data: {
      reuseComponent: true
    }
  },
  {
    path: 'lista-de-tarefas',
    component: ListaTarefasComponent,
    data: {
      reuseComponent: true
    }
  }
];

