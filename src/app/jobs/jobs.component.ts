import { Component, OnInit } from '@angular/core';
import { JobService } from '../job.service';
import { Job } from '../job';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})


export class JobsComponent implements OnInit {

  dataSource = new JobDataSource(this.jobService);
  displayedColumns: string[] = ['job_name', 'last_starttime','last_job_status'];

  selectJob : Job;

  constructor(private jobService: JobService) { }

  ngOnInit() {    
  }



}


export class JobDataSource extends DataSource<any> {
  constructor(private jobService: JobService) {
    super();
  }
  connect(): Observable<Job[]> {
      return this.jobService.getJobs();
  }
  disconnect(){}
}