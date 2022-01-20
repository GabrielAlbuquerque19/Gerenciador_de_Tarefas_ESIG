import { Jobs } from './../jobs.model';
import { JobsService } from './../jobs.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-jobs-create',
  templateUrl: './jobs-create.component.html',
  styleUrls: ['./jobs-create.component.css']
})
export class JobsCreateComponent implements OnInit {

  job: Jobs = {
    title: '',
    description: '',
    responsible: '',
    priority: '',
    deadline: '',
    status: 'Em andamento'
  }

  constructor(private jobsService: JobsService, private router: Router) { }

  ngOnInit(): void {
  }
  createJob(): void {
    this.jobsService.create(this.job).subscribe(() => {
      this.jobsService.showMessage('Tarefa Cadastrada com sucesso!');
      this.router.navigate(['/jobs'])
    })
  }
  cancel(): void {
    this.router.navigate(['/'])
  }

}
