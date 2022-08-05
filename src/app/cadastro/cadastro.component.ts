import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario.model';
import { CadastroService } from './cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  usuario: Usuario = new Usuario;

  constructor(
    private cadastroService: CadastroService
  ) { }


  ngOnInit(): void {
  }


  cadastrar(): any {
    this.cadastroService.cadastrar(this.usuario).subscribe(
      res => console.log("Cadastro realizado")
    )
  }
}
