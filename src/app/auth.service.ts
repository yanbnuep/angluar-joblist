import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {tap, catchError} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'})
};

interface AuthMsg {
  Result: string;
  SID: string;
}


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private loginUrl = 'http://app.airmacau.com.mo/etl/api/login.ashx';
  isLoggedIn = false;
  redirectUrl: string;

  constructor(
    private http: HttpClient
  ) {

  }

  loginAuth(loginUser: string): Observable<boolean> {
    this.isLoggedIn = true;
    return of(true);
  }

}
