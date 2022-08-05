import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ContatosPagination } from '../contatos-pagination.model';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {

  contatosUrl = 'http://localhost:5000/contatos'

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<ContatosPagination>(`${this.contatosUrl}`);
  }
}
