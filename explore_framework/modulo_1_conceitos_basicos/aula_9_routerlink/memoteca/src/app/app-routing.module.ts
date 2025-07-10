import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateThinkComponent } from './components/thinks/create-think/create-think.component';
import { ListThinksComponent } from './components/thinks/list-thinks/list-thinks.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "lista-de-pensamentos",
    pathMatch: "full"
  },
  {
    path: "criar-pensamentos",
    component: CreateThinkComponent
  },
  {
    path: "lista-de-pensamentos",
    component: ListThinksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
