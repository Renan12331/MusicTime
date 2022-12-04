import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AlunosService } from '../../services/alunos.service';
import { ActivatedRoute } from '@angular/router';
import { Aluno } from '../../model/aluno';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.scss']
})
export class AlunoFormComponent implements OnInit {

  form = this.formBuilder.group({
    _id: [''],
    name: [''],
    matricula: [''],
    cpf: [''],
    endereco: [''],
    curso: ['']
  });

  constructor(private formBuilder: NonNullableFormBuilder, 
    private service: AlunosService, 
    private snackBar: MatSnackBar, 
    private location: Location,
    private route: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    const aluno: Aluno = this.route.snapshot.data['aluno']; 
    this.form.setValue({
      _id: aluno._id,
      name: aluno.name,
      matricula: aluno.matricula,
      cpf: aluno.cpf,
      endereco: aluno.endereco,
      curso: aluno.curso
    })
  }

  
  onSubmit(){
    this.service.save(this.form.value)
      .subscribe(result => this.onSuccess(), error => this.onError());
  }

  onCancel(){
    this.location.back();
  }

private onSuccess(){
  this.snackBar.open('Curso salvo com sucesso!.', '', {duration: 5000});
  this.onCancel();
}

private onError(){
  this.snackBar.open('Erro ao salvar aluno.', '', {duration: 5000});
}
}
