import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from '../job.service';
import { Location } from '@angular/common';
import { Job } from '../job';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {

  job: Job;

  constructor(
    private route: ActivatedRoute,
    private jobService: JobService,
    private location: Location
  ) { }

  ngOnInit(): void{
    this.getJob();
  }

  getJob(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.jobService.getJob(id)
      .subscribe(job => this.job = job);
  }

  goBack(): void {
    this.location.back();
  }
}
