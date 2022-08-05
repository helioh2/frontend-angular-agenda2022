import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../usuario.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginUrl = 'http://localhost:5000/sessions'

  private usuarioAutenticado: boolean = false;

  constructor(private http: HttpClient, private router: Router) { }

  doLogin(usuario:Usuario) {
    this.http.post<any>(`${this.loginUrl}`, usuario).subscribe(
      json => {
        console.log(json);
        if (!json.erro){
          this.usuarioAutenticado = true;
          this.router.navigate(['/']);
        }
        return json;
      }
    );
  }
}
