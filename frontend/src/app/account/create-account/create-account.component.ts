import { AccountService } from './../shared/account.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  login = {
    user: '',
    password: '',
    responsible:''
  };
  constructor(
    private accountService: AccountService,
    private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.accountService.createAccount(this.login).subscribe(() => {
      this.accountService.showMessage('Usuário cadastrado com sucesso!');
      this.router.navigate(['/'])
    })
  }

  cancel(): void {
    this.router.navigate(['/'])
  }


}
