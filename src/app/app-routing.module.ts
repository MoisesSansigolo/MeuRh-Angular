import { AuthGuard } from './account/shared/auth.guard';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { LoginComponent } from './account/login/login.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';

import { CadastroUpdateComponent } from './components/cadastro/cadastro-update/cadastro-update.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { CadastroCrudComponent } from './views/cadastro-crud/cadastro-crud.component';
import { CadastroCreateComponent } from './components/cadastro/cadastro-create/cadastro-create.component';
import { CadastroDeleteComponent } from './components/cadastro/cadastro-delete/cadastro-delete.component';
import { SigningComponent } from './layout/signing/signing.component';

const routes: Routes = [
  {
    path: '',
    component: SigningComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'cadastros',
        component: CadastroCrudComponent,
      },
      {
        path: 'cadastros/create',
        component: CadastroCreateComponent,
      },
      {
        path: 'cadastros/update/:id',
        component: CadastroUpdateComponent,
      },
      {
        path: 'cadastros/delete/:id',
        component: CadastroDeleteComponent,
      },
    ],
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'create-account',
        component: CreateAccountComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
