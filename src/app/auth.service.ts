import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

interface AuthMsg {
  Result: string;
  SID: string;
}

interface LoginUser {
  uid: string;
  pwd: string;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private loginUrl = '';

  constructor(
    private http: HttpClient
  ) {

  }

  loginAuth(loginUser: LoginUser): Observable<AuthMsg> {
    return this.http.post<AuthMsg>(this.loginUrl, loginUser, httpOptions)
      .pipe(
        catchError(this.handleError())
      );
  }

  handleError = info => {
    console.log(info);
  }
}
