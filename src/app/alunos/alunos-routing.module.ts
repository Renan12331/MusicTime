import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunoFormComponent } from './containers/aluno-form/aluno-form.component';

import { AlunosComponent } from './containers/alunos/alunos.component';
import { AlunoResolver } from './guards/aluno.resolver';

const routes: Routes = [
  {path: '', component: AlunosComponent},
  {path: 'new', component: AlunoFormComponent, resolve: {aluno: AlunoResolver}},
  {path: 'edit/:id', component: AlunoFormComponent, resolve: {aluno: AlunoResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
