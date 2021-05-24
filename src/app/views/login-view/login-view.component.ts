import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginInfo } from 'src/app/models/LoginInfo.model';

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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLoginBttnClicked(): void {

    // this.sessionService.login(this.loginInfo)
    //   .subscribe(
    //     (result: TokenSet) => {
    //       this.spinnerService.hide();
    //       this.sessionService.clearSelfName();
    //       if (result.forceChangePassword) {
    //         this.router.navigate(['/login/change']);
    //       } else {
    //         this.router.navigate(['/asm/dashboard']);
    //       }
    //     },
    //     (err: ApiError) => {
    //       this.spinnerService.hide();
    //       if (err.is401()) {
    //         this.msg = err.message;
    //       } else {
    //         this.msg = err.message ? err.message : "unknown error";
    //       }
    //     }
    //   );
  }

}
