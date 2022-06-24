import { Cadastro } from './../cadastro.model';
import { CadastroService } from './../cadastro.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-creat',
  templateUrl: './cadastro-create.component.html',
  styleUrls: ['./cadastro-create.component.css'],
})
export class CadastroCreateComponent implements OnInit {
  cadastro: Cadastro = {
    nome: '',
    profissao: '',
    salario: null,
  };

  constructor(
    private cadastroService: CadastroService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  createCadastro(): void {
    this.cadastroService.create(this.cadastro).subscribe(() => {
      this.cadastroService.showMessage('Cadastro efetuado!');
      this.router.navigate(['/cadastros']);
    });
  }
  cancelaCadastro(): void {
    this.router.navigate(['/cadastros']);
  }
}
