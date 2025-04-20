import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getCurrentToken() {
    return localStorage.getItem('token');
  }
  
}
