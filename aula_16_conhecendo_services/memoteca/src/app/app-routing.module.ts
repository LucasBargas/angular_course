import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateThinkComponent } from './components/thinks/create-think/create-think.component';
import { ListThinksComponent } from './components/thinks/list-thinks/list-thinks.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "lista-de-pensamentos",
    pathMatch: "full",
    data: { title: 'Lista de Pensamentos' }
  },
  {
    path: "criar-pensamentos",
    component: CreateThinkComponent,
    data: { title: 'Criar Pensamentos' }
  },
  {
    path: "lista-de-pensamentos",
    component: ListThinksComponent,
    data: { title: 'Lista de Pensamentos' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
