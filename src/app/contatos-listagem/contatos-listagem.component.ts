import { Component, OnInit } from '@angular/core';
import { Contato } from '../contato.model';
import { ContatosPagination } from '../contatos-pagination.model';
import { ContatosService } from './contatos.service';

@Component({
  selector: 'app-contatos-listagem',
  templateUrl: './contatos-listagem.component.html',
  styleUrls: ['./contatos-listagem.component.css']
})
export class ContatosListagemComponent implements OnInit {

  title = "Lista de Contatos"

  contatos: any;
  page: number = 1;
  total: number = 0;
  perPage: number = 10;

  buscaStr: string = "";


  constructor(private contatosService: ContatosService) { }

  ngOnInit(): void {
    this.listar()
  }

  listar() {
    this.contatosService.listar(this.page, this.buscaStr).subscribe(
      dados => {
        console.log(dados);
        this.contatos = dados.items;
        this.page = dados.page;
        this.perPage = dados.per_page;
        this.total = dados.total;
      }
        );
  }

  buscar(event: any) {
    this.buscaStr = event.target.value;
    this.listar()
  }

  pageChangeEvent(event: number){
    this.page = event;
    this.listar();
}

}
