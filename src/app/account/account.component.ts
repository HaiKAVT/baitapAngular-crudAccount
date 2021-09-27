
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Account} from "../model/account";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  accountFormGroup: FormGroup = new FormGroup({});

  @Input()
  accounts: Account[] = [];
  @Output()
  createAccountEmit = new EventEmitter<Account>();
  @Output()
  deleteAccountEmit = new EventEmitter<string>();
  @Output()
   editAccountEmit = new EventEmitter<Account>();
  constructor() { }

  ngOnInit(): void {
    this.accountFormGroup = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      img: new FormControl('', [Validators.required, Validators.minLength(6)]),
      status: new FormControl(true),
      pass: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  createAccount(){
    this.createAccountEmit.emit(this.accountFormGroup.value);
    this.accountFormGroup.reset();
  }
  deleteAccount(name: string){
    this.deleteAccountEmit.emit(name);
  }
  showEdit(name: string){
    for (let i = 0; i < this.accounts.length; i++) {
      if (this.accounts[i].name === name) {
        this.accountFormGroup.get('name')?.setValue(this.accounts[i].name);
        this.accountFormGroup.get('img')?.setValue(this.accounts[i].img);
        this.accountFormGroup.get('price')?.setValue(this.accounts[i].pass);
        return;
      }
    }

  }

  submitEdit() {
    this.editAccountEmit.emit(this.accountFormGroup.value);
    this.accountFormGroup.reset();
  }
}
