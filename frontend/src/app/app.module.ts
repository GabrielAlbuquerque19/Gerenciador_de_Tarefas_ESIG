import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { FeedComponent } from './components/template/feed/feed.component';
import { JobsComponent } from './views/jobs/jobs.component';
import { JobCrudComponent } from './views/job-crud/job-crud.component';
import { JobsCreateComponent } from './components/jobs/jobs-create/jobs-create.component';
import { JobsReadComponent } from './components/jobs/jobs-read/jobs-read.component';
import { JobsUpdateComponent } from './components/jobs/jobs-update/jobs-update.component';
import { JobsDeleteComponent } from './components/jobs/jobs-delete/jobs-delete.component';
import { JobsConcludeComponent } from './components/jobs/jobs-conclude/jobs-conclude.component';
import { LoginComponent } from './account/login/login.component';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { HomeComponent } from './layout/home/home.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { AccountService } from './account/shared/account.service';

// Imports do Material Design
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FeedComponent,
    JobsComponent,
    JobCrudComponent,
    JobsCreateComponent,
    JobsReadComponent,
    JobsUpdateComponent,
    JobsDeleteComponent,
    JobsConcludeComponent,
    LoginComponent,
    CreateAccountComponent,
    HomeComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule,
    MatDialogModule

  ],
  providers: [MatDatepickerModule,
    AccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
