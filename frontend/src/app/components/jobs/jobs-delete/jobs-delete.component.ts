import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Jobs } from '../jobs.model';
import { JobsService } from '../jobs.service';

@Component({
  selector: 'app-jobs-delete',
  templateUrl: './jobs-delete.component.html',
  styleUrls: ['./jobs-delete.component.css']
})

export class JobsDeleteComponent implements OnInit {
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
    private route: ActivatedRoute, 
    private dialog:MatDialog) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')||''
    this.jobsService.readById(id).subscribe(job => {
      this.job = job;
    });
  }

  deleteJob(): void {
    const id = this.route.snapshot.paramMap.get('id')||''
    this.jobsService.delete(id).subscribe(() => {
      this.jobsService.showMessage("Tarefa excluida com sucesso!");
      this.router.navigate(['/jobs']);

    })
    


  }
  cancel(): void {
    this.router.navigate(['/jobs']);

  }
}