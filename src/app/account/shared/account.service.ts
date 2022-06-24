import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor() {}

  // tslint:disable-next-line: typedef
  login(user: any) {
    return new Promise((resolve) => {
      window.localStorage.setItem('token', 'meu-token');
      resolve(true);
    });
  }

  // tslint:disable-next-line: typedef
  creatAccount(account: any) {
    return new Promise((resolve) => {
      resolve(true);
    });
  }
}
