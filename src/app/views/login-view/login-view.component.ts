import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginInfo } from 'src/app/models/LoginInfo.model';
import { SessionService } from 'src/app/services/system/session.service';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {

  loginInfo: LoginInfo = {
    email: null,
    password: null
  }

  msg: string = "";

  constructor(
    private router: Router,
    private sessionService: SessionService) { }

  ngOnInit(): void {
  }

  onLoginBttnClicked(): void {
    this.sessionService.login(this.loginInfo)
      .subscribe(
        (result: boolean) => {
            this.router.navigate(['/asm/dashboard']);
        },
        (err: string) => {
          this.msg = err;
        }
      );
  }

}
