import { Component } from '@angular/core';
import {Account} from "./model/account";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-baitap-crudTaikhoan';

  accounts: Account[] = [];
  constructor() {
    this.accounts.push(new Account("hai",
      "https://i.pinimg.com/originals/e3/53/52/e353523d1a8ad11e523fc2590d9734d9.jpg",
      true, "123"))
  }

  createAccount(account: Account) {
    this.accounts.push(account)
  }
  deleteAccount(name: string) {
    for (let i = 0; i < this.accounts.length; i++) {
      if (this.accounts[i].name === name) {
        this.accounts.splice(i, 1);
        return;
      }
    }
    console.log("this.products")
    console.log(this.accounts)
  }
  editAccount(account: Account) {
    for (let i = 0; i < this.accounts.length; i++) {
      if (this.accounts[i].name === account.name) {
        this.accounts[i] = account;
      }
    }
  }
}
