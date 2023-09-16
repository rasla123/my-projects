import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Employee } from '../models/employeee.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3000';
 
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/users?username=${username}&password=${password}`);
  }
 
  
  getLoggedInUser(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/users?id=${id}`);
  }

 
}
