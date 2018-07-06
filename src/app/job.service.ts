import {Injectable} from '@angular/core';
import {Job} from './job';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private jobsUrl = 'https://app.airmacau.com.mo:8080/etl/api/ejob_list.ashx';  // URL to web api
  private queUrl = 'https://app.airmacau.com.mo:8080/etl/api/ejob_query.ashx';

  constructor(
    private http: HttpClient
  ) {
  }

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.jobsUrl)
      .pipe(
        tap(jobes => this.log(`fetched Jobs`)),
        catchError(this.handleError('getJobs', []))
      );
  }

  /** GET hero by id. Will 404 if id not found */
  getJob(Job_Name: string): Observable<Job> {
    const url = `${this.queUrl}` + '?job_nm=' + `${Job_Name}`;
    return this.http.get<Job>(url).pipe(
      tap(_ => this.log(`fetched Job Job_Name=${Job_Name}`)),
      catchError(this.handleError<Job>(`getJob Job_Name=${Job_Name}`))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error);

      // TODO: better job of transforming error for user consumption
      this.log('${operation} failed: ${error.message}');

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log('JobService: ' + message);
  }
}
