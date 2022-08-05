import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../usuario.model';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  cadastroUrl = 'http://localhost:5000/sessions'

  constructor(private http: HttpClient) { }

  cadastrar(usuario:Usuario) {
    return this.http.post<any[]>(`${this.cadastroUrl}`, usuario);
  }
}
