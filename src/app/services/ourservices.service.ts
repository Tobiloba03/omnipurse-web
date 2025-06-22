import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Values } from 'src/config/values.config';

@Injectable({
  providedIn: 'root'
})
export class OurservicesService {

  constructor(private http: HttpService) { }

  BookConsultation(objBookConsultation:{})
  {
    return this.http.postData(`${Values.apiUrl}Consultation/BookConsultation`,objBookConsultation);
  }
}
