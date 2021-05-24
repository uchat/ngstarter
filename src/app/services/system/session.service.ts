import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginInfo } from 'src/app/models/LoginInfo.model';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  login(loginInfo: LoginInfo): Observable<any> {
    const data = {
      "username": loginInfo.email,
      "password": loginInfo.password      
    }
    return null;
  //  return this.http.post(ENDPOINT.LOG_IN(), data)
  //         .pipe(
  //             // catchError((err: any) => {
  //             //   console.error("--- iam.service error");
  //             //   console.log(err);
  //             //   return throwError(err);
  //             // }),
  //             tap(e => {
  //               this.storeSessionInfo(e);
  //             })              
  //           );
  }  
}
