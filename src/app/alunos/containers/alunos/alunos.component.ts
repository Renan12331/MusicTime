import { Component, OnInit } from '@angular/core';
import { Aluno } from '../../model/aluno';
import { AlunosService } from '../../services/alunos.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.scss']
})
export class AlunosComponent implements OnInit {

alunos$: Observable <Aluno[]> | null = null;


  constructor(
    private alunosService: AlunosService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
    ) 
    {
    this.refresh();
  }

  refresh(){
    this.alunos$ = this.alunosService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar alunos.');
        return of([])
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
}
  ngOnInit(): void {
}

onAdd() {
  this.router.navigate(['new'], {relativeTo: this.route});
}
onEdit(aluno: Aluno){
  this.router.navigate(['edit', aluno._id], {relativeTo: this.route});
}

onRemove(aluno: Aluno){
  this.alunosService.remove(aluno._id).subscribe(
    () => {
      this.refresh();
      this.snackBar.open('Curso removido com sucesso!.', 'X', {duration: 5000,
      verticalPosition: 'top',
      horizontalPosition: 'center'
    });
    },
    () => this.onError('Erro ao tentar remover aluno')
  );
}

}
