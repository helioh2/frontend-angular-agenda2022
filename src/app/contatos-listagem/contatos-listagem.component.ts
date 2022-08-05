import { Component, OnInit } from '@angular/core';
import { ContatosPagination } from '../contatos-pagination.model';
import { ContatosService } from './contatos.service';

@Component({
  selector: 'app-contatos-listagem',
  templateUrl: './contatos-listagem.component.html',
  styleUrls: ['./contatos-listagem.component.css']
})
export class ContatosListagemComponent implements OnInit {

  title = "Lista de Contatos"

  contatos: ContatosPagination = new ContatosPagination;

  constructor(private contatosService: ContatosService) { }

  ngOnInit(): void {
    this.listar()
  }

  listar() {
    this.contatosService.listar().subscribe(
      dados => {
        console.log(dados);
        this.contatos = dados;
      }
        );
  }

}
