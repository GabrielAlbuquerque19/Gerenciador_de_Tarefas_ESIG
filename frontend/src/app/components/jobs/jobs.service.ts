import { Jobs } from './jobs.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, EMPTY, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  url = 'http://localhost:2000/jobs'
  urlConclude = 'http://localhost:2000/jobsConclude'

  constructor(
    private snackbar: MatSnackBar, 
    private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
      this.snackbar.open(msg, '', {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "bottom",
        panelClass: isError ? ['msg-error'] : ['msg-success']
      });
    }

  create(job: Jobs): Observable < Jobs > {
      return this.http.post<Jobs>(this.url, job).pipe(
        map((obj) => obj),
        catchError(e => this.errorHandler(e))
      );
    }

  read(): Observable < Jobs[] > {
      return this.http.get<Jobs[]>(this.url).pipe(
        map((obj) => obj),
        catchError(e => this.errorHandler(e))
      );
  }
  readConclude(): Observable < Jobs[] > {
    return this.http.get<Jobs[]>(this.urlConclude).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
}
  readById(id: string): Observable < Jobs > {
      const url = `${this.url}/${id}`;
      return this.http.get<Jobs>(url).pipe(
        map((obj) => obj),
        catchError(e => this.errorHandler(e))
      );
    }
  update(job: Jobs): Observable < Jobs > {
      const url = `${this.url}/${job.id}`;
      return this.http.put<Jobs>(url, job).pipe(
        map((obj) => obj),
        catchError(e => this.errorHandler(e))
      );
    }
  delete (id: string): Observable < Jobs > {
      const url = `${this.url}/${id}`;
      return this.http.delete<Jobs>(url).pipe(
        map((obj) => obj),
        catchError(e => this.errorHandler(e))
      );
    }

    conclude(job: Jobs): Observable < Jobs > {
      return this.http.post<Jobs>(this.urlConclude, job).pipe(
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