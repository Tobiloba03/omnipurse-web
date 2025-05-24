import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { AuthService } from './../services/auth.service';
import { tap, catchError } from 'rxjs/operators';
import { throwError as observableThrowError, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(
    private http: HttpClient
  ) { }

  getCurrentToken() {
    return localStorage.getItem('token');
  }

  postFile(source: string, fileToUpload: File) {
    const formData: FormData = new FormData();
    formData.append('Image', fileToUpload, fileToUpload.name);
    return this.http.post(source, formData).pipe(
      tap((response) => response),
      catchError(this.handleError));
  }


  // postFile(file: File, apiUrl): Observable<Object> {
  //   const headers = new HttpHeaders({
  //     Authorization: 'Bearer ' + this.authService.getCurrentToken()
  //   });
  //   const options = { headers };

  //   const formData: FormData = new FormData();
  //   formData.append('Image', file, file.name);

  //   return this.http.post<any>(
  //     apiUrl,
  //     formData,
  //     options
  //   );
  // }

  updateData(source: string, data: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const options = { headers };
    return this.http.put(source, data, options).pipe(
      tap((res: any) => res),
      catchError(this.handleError)
    );
  }

  getData(source: string) {
    // this.checkAuth();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.getCurrentToken()
    });
    const options = { headers };
    return this.http.get(source, options).pipe(
      tap((res: any) => res),
      catchError(this.handleError)
    );
  }

  postData(source: string, data: any) {
    // this.checkAuth();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.getCurrentToken(),
      "Access-Control-Allow-Origin": "*",
      'Access-Control-Allow-Headers': 'Content-Type',
    });
    const options = { headers };
    return this.http.post(source, data, options).pipe(
      tap((res: any) => res),
      catchError(this.handleError)
    );
  }

  deleteData(source: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.getCurrentToken()
    });
    const options = { headers };
    return this.http.delete(source, options).pipe(
      tap((res: any) => res),
      catchError(this.handleError)
    );
  }

  getOpenData(source: string) {
    return this.http.get(source).pipe(
      tap((res: any) => res),
      catchError(this.handleError)
    );
  }

  updateBenefit(source: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const options = { headers };
    return this.http.put(source, options).pipe(
      tap((res: any) => res),
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    return observableThrowError(error.error || 'Server error');
  }
}
