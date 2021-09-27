import {Component, Input, OnInit} from '@angular/core';
import {Account} from "../model/account";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input()
  accounts: Account[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
