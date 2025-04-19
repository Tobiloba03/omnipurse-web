import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Values } from 'src/config/values.config';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpService) { }
  
  SubmitContactUs(objContactUs:any)
  {
    return this.http.postData(`${Values.apiUrl}ContactUs/CreateContactUs`,objContactUs);
  }
}
