import { Users } from './../../components/jobs/jobs.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  
  urlUsers = 'http://localhost:2000/users'

  constructor(private http:HttpClient,
    private snackbar: MatSnackBar, ) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackbar.open(msg, '', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "bottom",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  login(): Observable < Users[] > {
    
    return this.http.get<Users[]>(this.urlUsers).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
};

  createAccount(account: any): Observable < Users > {
    return this.http.post<Users>(this.urlUsers, account).pipe(
    map((obj) => obj),
    catchError(e => this.errorHandler(e))
  );
  }
  
  
  errorHandler(e: any): Observable < any > {
    console.log(e);
    this.showMessage('Ocorreu algum erro!', true);
    return EMPTY;
  }
}
