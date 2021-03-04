import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public APIURL = environment.APP.BASE_URL;
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}

  get(url: any): Observable<any> {
    const apiUrl = this.APIURL + url;
    return this.http.get(apiUrl, this.options);
  }
  post(url: any, data: any): Observable<any> {
    const apiUrl = this.APIURL + url;
    return this.http.post(apiUrl, JSON.stringify(data), this.options);
  }
  getJson(url:any){
    return this.http.get(url, this.options);
  }
}

