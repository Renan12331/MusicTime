import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from '../../model/aluno';

@Component({
  selector: 'app-alunos-list',
  templateUrl: './alunos-list.component.html',
  styleUrls: ['./alunos-list.component.scss']
})
export class AlunosListComponent implements OnInit {

@Input() alunos: Aluno[] = [];
@Output() add = new EventEmitter(false);
@Output() edit = new EventEmitter(false);
@Output() remove = new EventEmitter(false);

readonly displayedColumns = ['_id','name', 'matricula', 'cpf', 'endereco', 'curso','actions'];

  constructor() { }

  ngOnInit(): void {
  }

  onAdd() {
  this.add.emit(true);
  }

  onEdit(aluno: Aluno){
  this.edit.emit(aluno);
  }

  onDelete(aluno: Aluno){
  this.remove.emit(aluno);
  }
}
