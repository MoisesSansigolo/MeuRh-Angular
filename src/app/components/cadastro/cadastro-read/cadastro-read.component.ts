import { CadastroService } from './../cadastro.service';
import { Cadastro } from './../cadastro.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cadastro-read',
  templateUrl: './cadastro-read.component.html',
  styleUrls: ['./cadastro-read.component.css'],
})
export class CadastroReadComponent implements OnInit {

  cadastros: Cadastro[];

  displayedColumns = ['id', 'nome', 'profissao', 'salario', 'acoes'];
  service: any;

  constructor(private cadastroService: CadastroService) {}


  ngOnInit(): void {
    this.cadastroService.read().subscribe((cadastros) => {
      this.cadastros = cadastros;
      console.log(cadastros);
    });
  }

}


