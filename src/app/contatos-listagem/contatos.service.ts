import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ContatosPagination } from '../contatos-pagination.model';
import { Contato } from '../contato.model';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {

  contatosUrl = 'http://localhost:5000/contatos'

  constructor(private http: HttpClient) { }

  listar(page: number = 1, buscaStr: string = "") {
    let url = `${this.contatosUrl}?page=${page}`;
    if (buscaStr) {
      url += `&nome=${buscaStr}`
    }
    return this.http.get<ContatosPagination>(`${url}`);
  }

}
