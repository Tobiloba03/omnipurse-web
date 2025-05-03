import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { Values } from 'src/config/values.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpService) { }

    login(credentials:{ email: string; password: string }): Observable<any>
    {
      return this.http.postData(`${Values.apiUrl}Auth/Login`, credentials);
    }

    forgotPassword(email: string): Observable<any>
    {
      return this.http.postData(`${Values.apiUrl}Auth/ForgotPassword`, email);
    }

    createAccount(objCreateUser:any): Observable<any>
    {
      return this.http.postData(`${Values.apiUrl}Auth/Register`, objCreateUser);
    }
}

