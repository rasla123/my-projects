import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { Employee } from '../models/employeee.model';
@Injectable({
  providedIn: 'root'
})
export class LeaveApplicationService {
  private baseUrl = 'http://localhost:3000';
  private loggedInUser: Employee | null = null;

  constructor(private http: HttpClient) {}

  submitLeaveApplication(leaveApplication: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/leaveApplications`, leaveApplication);
  }

  getLeaveApplications(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/leaveApplications`);
  }

  setLoggedInUser(user: Employee) {
    this.loggedInUser = user;
  }

  getLoggedInUser(): Employee | null {
    return this.loggedInUser;
  }
}
