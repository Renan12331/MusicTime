import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { AlunosRoutingModule } from './alunos-routing.module';
import { AlunosComponent } from './containers/alunos/alunos.component';
import { AlunoFormComponent } from './containers/aluno-form/aluno-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlunosListComponent } from './components/alunos-list/alunos-list.component';




@NgModule({
  declarations: [
    AlunosComponent,
    AlunoFormComponent,
    AlunosListComponent
  ],
  imports: [
    CommonModule,
    AlunosRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class AlunosModule { }
