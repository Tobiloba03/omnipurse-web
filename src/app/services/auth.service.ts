import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpService } from './http.service';
import { Values } from 'src/config/values.config';
import { LoginObj } from '../interfaces/interfaces';

@Injectable({ providedIn: 'root' })
export class AuthService {
  currentUser: any = null;

  constructor(private http: HttpService) {}

  login(credentials: LoginObj): Observable<any> {
    return this.http.postData(`${Values.apiUrl}Auth/Login`, credentials);
    // .pipe(
    //   map((res: any) => {
    //     if (res && res.token) {
    //       this.currentUser = res.user;
    //       localStorage.setItem('token', res.token);
    //       return true;
    //     }
    //     return false;
    //   })
    // );
  }

  createAccount(objCreateUser: any): Observable<any> {
    return this.http.postData(`${Values.apiUrl}Auth/CreateAccount`, objCreateUser);
  }

  forgotPassword(email: string): Observable<any> {
    return this.http.postData(`${Values.apiUrl}Auth/ForgotPassword`, { email });
  }

  isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  RetrievePassword(email: string): Observable<any> {
    return this.http.postData(`${Values.apiUrl}Auth/RetrievePassword`, { email });
  }
}
