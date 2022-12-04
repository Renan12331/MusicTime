import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Aluno } from '../model/aluno';
import { delay, first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

private readonly API =  'api/alunos';

  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<Aluno[]>(this.API)
    .pipe(
      first(),
      //delay(5000),
      tap(alunos => console.log(alunos))
    );
  }

  loadById(id: string){
    return this.httpClient.get<Aluno>(`${this.API}/${id}`);
  }

  save(record: Partial<Aluno>){
    if(record._id){
      return this.update(record);
    }
    return this.create(record);
  }

  private create(record: Partial<Aluno>){
    return this.httpClient.post<Aluno>(this.API, record).pipe(first());
  }

  private update(record: Partial<Aluno>){
    return this.httpClient.put<Aluno>(`${this.API}/${record._id}`, record).pipe(first());
  }

  remove(id: string){
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }
}
