import { AuthGuard } from './account/shared/auth.guard';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { LoginComponent } from './account/login/login.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { HomeComponent } from './layout/home/home.component';
import { JobsDeleteComponent } from './components/jobs/jobs-delete/jobs-delete.component';
import { JobsUpdateComponent } from './components/jobs/jobs-update/jobs-update.component';
import { JobsCreateComponent } from './components/jobs/jobs-create/jobs-create.component';
import { JobsConcludeComponent } from './components/jobs/jobs-conclude/jobs-conclude.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { JobsComponent } from './views/jobs/jobs.component';
import { JobCrudComponent } from './views/job-crud/job-crud.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      {
        path: "",
        component: JobsComponent
      },
      {
        path: "jobs",
        component: JobCrudComponent
      },
      {
        path: "jobs/create",
        component: JobsCreateComponent
      },
      {
        path: "jobs/update/:id",
        component: JobsUpdateComponent
      },
      {
        path: "jobs/delete/:id",
        component: JobsDeleteComponent
      },
      {
        path: "jobs/conclude/:id",
        component: JobsConcludeComponent
      }
    ],
    canActivate: [AuthGuard]
  },
  {
    path: "",
    component: AuthenticationComponent,
    children: [{
      path: "", redirectTo: "login", pathMatch: "full"

    },
    {
      path: "login", 
      component: LoginComponent
    },

    {
      path: "create-account", 
      component: CreateAccountComponent
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
