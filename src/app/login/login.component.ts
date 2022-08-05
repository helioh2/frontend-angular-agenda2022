import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario.model';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario;

  constructor(
    private loginService: LoginService
  ) { }


  ngOnInit(): void {
  }

  login(): any {
    this.loginService.doLogin(this.usuario);
  }

}
