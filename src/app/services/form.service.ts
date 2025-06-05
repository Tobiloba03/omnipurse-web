import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Values } from 'src/config/values.config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpService) { }
  
  SubmitContactUs(objContactUs:any)
  {
    return this.http.postData(`${Values.apiUrl}ContactUs/CreateContactUs`,objContactUs);
  }

  SubscribeToNewsletter(objSTNl:{})
  {
    return this.http.postData(`${Values.apiUrl}Subscriber/SubscribeToNewsletter`,objSTNl);
  }

  GetCountrys(loggedUser:{}) 
  {
    return this.http.postData(`${Values.apiUrl}Generic/GetCountrys`,loggedUser);
  }
  
  GetStates(countryId: number,loggedUser: string="") : Observable<any>
  {
    return this.http.getData(`${Values.apiUrl}Generic/GetStatesByCountryID?countryId=${countryId}&loggedUser=${loggedUser}`);
  }
}
