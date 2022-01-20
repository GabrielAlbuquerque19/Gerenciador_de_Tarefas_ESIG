import { JobsService } from './../../components/jobs/jobs.service';
import { Component, OnInit } from '@angular/core';
import { Jobs } from 'src/app/components/jobs/jobs.model';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  jobsConclude=0;
  jobsProgress=0;
  constructor(private jobsService:JobsService) { }

  ngOnInit(): void {
    this.jobsService.read().subscribe(jobs => {
      this.jobsProgress=jobs.length
    });
    this.jobsService.readConclude().subscribe(jobs => {
      this.jobsConclude=jobs.length
    });
   
  }

}   