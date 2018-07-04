import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  uid: string;
  pwd: string;

  constructor(public authService: AuthService, public router: Router) {
  }

  ngOnInit() {
  }

  onUidKey(event: any) {
    this.uid = event.target.value;
  }

  onPwdKey(event: any) {
    this.pwd = event.target.value;
  }

  onSubmit() {
    if (this.uid && this.pwd) {
      this.authService.loginAuth('').subscribe(()=> {
        if (this.authService.isLoggedIn) {
          let redirect = this.authService.redirectUrl ?
            this.authService.redirectUrl : '';
          this.router.navigate([redirect]);
        }
      })
    }
  }
}
