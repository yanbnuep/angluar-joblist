import { Injectable } from '@angular/core';
import { Job } from './job';
import {Observable, of} from 'rxjs';
import { JOBS } from './mock-jobs';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  getJobs(): Observable<Job[]> {
    return of(JOBS);
  }
  
  getJob(id: number){
    return of(JOBS.find(job=> job.id === id ));
  }
}
