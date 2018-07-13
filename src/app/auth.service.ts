import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import {observable, Observable, throwError} from 'rxjs';
import {tap, catchError} from 'rxjs/operators';
import {MessageService} from './message.service';
import {docCookies} from '../../node_modules/doc-cookies';

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
    private http: HttpClient,
    private messageService: MessageService
  ) {

  }

  loginAuth(loginUser: string) {
    return this.http.post(this.loginUrl, loginUser, httpOptions)
      .pipe(
        tap(
          (res: AuthMsg) => {
            if (res['SID']) {
              this.isLoggedIn = true;
              docCookies.setItem('SID', res['SID']);
            } else {
              this.messageService.clear();
              this.messageService.add(res['Result']);
            }
          }
        ),
        catchError(this.handleErrors)
      );
  }

  private handleErrors(error: HttpErrorResponse) {
    this.messageService.clear();
    this.messageService.add(JSON.stringify(error));
    console.log(1);
    return throwError(error);
  }
}
