import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Jobs } from '../jobs.model';
import { JobsService } from '../jobs.service';

@Component({
  selector: 'app-jobs-conclude',
  templateUrl: './jobs-conclude.component.html',
  styleUrls: ['./jobs-conclude.component.css']
})
export class JobsConcludeComponent implements OnInit {
  job: Jobs = {
    title: '',
    description: '',
    responsible: '',
    priority: '',
    deadline: '',
    status: ''
  }

  constructor(private jobsService: JobsService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')||''
    this.jobsService.readById(id).subscribe(job => {
      this.job = job;
    });
  }
  checkJob(): void {
    this.jobsService.conclude(this.job).subscribe(() => {      
      this.jobsService.showMessage("Tarefa concluída com sucesso!");
      this.router.navigate(['/jobs']);

    });
    const id = this.route.snapshot.paramMap.get('id')||''
    this.jobsService.delete(id).subscribe(() => {
      this.jobsService.showMessage("Tarefa excluida com sucesso!");
      this.router.navigate(['/jobs']);

    });


  }
  cancel(): void {
    this.router.navigate(['/jobs']);

  }
}