import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Aluno } from '../model/aluno';
import { AlunosService } from '../services/alunos.service';

@Injectable({
  providedIn: 'root'
})
export class AlunoResolver implements Resolve<Aluno> {

constructor(private service: AlunosService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Aluno> {
    if(route.params && route.params['id']){
      return this.service.loadById(route.params['id']);
    }
    return of({_id: '', name: '', matricula: '', cpf: '', endereco: '', curso: ''});
  }
}
