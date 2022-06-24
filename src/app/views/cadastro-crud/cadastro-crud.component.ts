import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-crud',
  templateUrl: './cadastro-crud.component.html',
  styleUrls: ['./cadastro-crud.component.css'],
})
export class CadastroCrudComponent implements OnInit {
  route: any;
  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de funcionarios',
      icon: 'storefront',
      routeUrl: '/cadastros',
    };
  }

  ngOnInit(): void {}

  navigateToCadastroCreate(): void {
    this.router.navigate(['/cadastros/create']);
  }


}
