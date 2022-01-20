import { ActivatedRoute, Router } from '@angular/router';
import { JobsService } from './../jobs.service';
import { Component, OnInit } from '@angular/core';
import { Jobs } from '../jobs.model';

@Component({
  selector: 'app-jobs-update',
  templateUrl: './jobs-update.component.html',
  styleUrls: ['./jobs-update.component.css']
})
export class JobsUpdateComponent implements OnInit {

  job: Jobs = {
    title: '',
    description: '',
    responsible: '',
    priority: '',
    deadline: '',
    status: 'Em andamento'
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
  updadeJob(): void {
    this.jobsService.update(this.job).subscribe(()=>{
      this.jobsService.showMessage("Tarefa atualizada com sucesso!");
      this.router.navigate(['/jobs']);
    })

  }
  cancel(): void {
    this.router.navigate(['/jobs']);

  }
}
