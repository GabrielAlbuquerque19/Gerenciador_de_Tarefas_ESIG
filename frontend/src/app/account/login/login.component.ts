import { Router } from '@angular/router';
import { AccountService } from './../shared/account.service';
import { Component, OnInit } from '@angular/core';
import { Users } from './../../components/jobs/jobs.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = { user: '', password: '' };

  constructor(
    private accountService: AccountService,
    private router: Router,

  ) { }

  ngOnInit(): void {

  }
  onSubmit() {
    this.accountService.login().subscribe(users => {
      let user = users.find(e => e.user === this.login.user);
      let password = users.find(e => e.password === this.login.password);

      if (user != undefined && password != undefined) {
        window.localStorage.setItem("token", "token-gerado");
        this.router.navigate(['']);
      }
      else {
        
        this.accountService.showMessage("Usuário ou senha incorreto!", true);
      }
    });

  }
}

