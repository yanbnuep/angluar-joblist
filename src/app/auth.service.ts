import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
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

  loginAuth(loginUser: LoginUser) {
    this.http.post(this.loginUrl, loginUser, httpOptions).subscribe(
      (val) => {
        console.log('POST successful return', val);
      },
      response => {
        console.log('post call in error', response);
      },
      () => {
        console.log('the post observable is completed.');
      }
    );
  }


}
