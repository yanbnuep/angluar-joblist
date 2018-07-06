import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import {observable, Observable, throwError} from 'rxjs';
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
  private loginUrl = 'https://app.airmacau.com.mo:8080/etl/api/login.ashx';
  isLoggedIn = false;
  redirectUrl: string;

  constructor(
    private http: HttpClient
  ) {

  }

  loginAuth(loginUser: string) {
    return this.http.post(this.loginUrl, loginUser, httpOptions)
      .pipe(
        tap(
          (res: AuthMsg) => {
            if (res['SID']) {
              this.isLoggedIn = true;
            }
          }
        ),
        catchError(this.handleErrors)
      );
  }

  private handleErrors(error: HttpErrorResponse) {
    console.log(JSON.stringify(error));
    return throwError(error);
  }
}
