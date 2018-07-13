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
  spinnerHide = true;
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
      const loginuser = 'uid=' + this.uid + '&pwd=' + this.pwd;
      this.spinnerHide = false;
      this.authService.loginAuth(loginuser).subscribe(() => {
        this.spinnerHide = true;
        if (this.authService.isLoggedIn) {
          const redirect = this.authService.redirectUrl ?
            this.authService.redirectUrl : '';
          console.log('this: ', redirect);
          this.router.navigate([redirect]);
        }
      });
    }
  }
}
