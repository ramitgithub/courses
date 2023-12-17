import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = "https://mocki.io/v1/b8d69ada-908f-4d70-97a9-c7dba1b99126";

  constructor(private http : HttpClient) { }

  // getUserData(): Observable<any[]> {
  //   return this.http.get<any[]>(`${this.apiUrl}/userData`);
  // }

  // getTimeSpentData(): Observable<any> {
  //   return this.http.get<any>(`${this.apiUrl}/timeSpentData`);
  // }

  // getLatestResults(): Observable<any[]> {
  //   return this.http.get<any[]>(`${this.apiUrl}/latestResults`);
  // }

  getUserData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
