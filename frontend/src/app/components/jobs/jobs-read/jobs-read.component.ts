
import { JobsService } from './../jobs.service';
import { Component, OnInit} from '@angular/core';
import { Jobs } from '../jobs.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-jobs-read',
  templateUrl: './jobs-read.component.html',
  styleUrls: ['./jobs-read.component.css']
})
export class JobsReadComponent implements OnInit {

  queryField = new FormControl();
  jobs: Jobs[] = [];
  displayedColumns = ['id', 'title', 'responsible', 'action']
  isVisible: boolean = true;
  constructor(private jobsService: JobsService) { }

  ngOnInit(): void {
    this.jobsService.read().subscribe(jobs => {
      this.jobs = jobs;
    });
  }
  onSearchId(): void {
    let value = this.queryField.value;
    this.jobsService.read().subscribe(jobs => {
      this.jobs = jobs.filter(e => e.id === +value);
    });
  }
  onSearchTitle(): void {
    let value = this.queryField.value;
    this.jobsService.read().subscribe(jobs => {
      this.jobs = jobs.filter(e => e.title === value);
    });
  }
  onSearchResponsible(): void {
    let value = this.queryField.value;
    this.jobsService.read().subscribe(jobs => {
      this.jobs = jobs.filter(e => e.responsible === value);
    });
  }
  onSearchProgress(): void {
    let value = this.queryField.value;
    if (value === "Em andamento") {
      this.isVisible = true;
      this.jobsService.read().subscribe(jobs => {
        this.jobs = jobs.filter(e => e.status === value);     
      });
    }
    else if(value === "Concluída"){
      this.isVisible = false;
      this.jobsService.readConclude().subscribe(jobs => {
        this.jobs = jobs;
        
        });
    }
    
  }
}
