import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employeee.model'
@Component({
  selector: 'app-user-leave-details',
  templateUrl: './user-leave-details.component.html',
  styleUrls: ['./user-leave-details.component.scss']
})
export class UserLeaveDetailsComponent implements OnInit {
  employeeId: string | undefined;
  leaveApplications: any[] = [];
  employees: Employee[] = []; // Define the employees array
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => { //It subscribes to changes in route parameters using 
      this.employeeId = params['employeeId'];//This line extracts the value of the employeeId parameter 
                                                 //from the route parameters and assigns it to the employeeId property of the component.
                                                 //rout parameter is named employeeId
      this.loadLeaveApplications();
    });
  }

  loadLeaveApplications() {
    // Fetch leave applications based on employee ID (this.employeeId)
    this.http.get<any[]>(`http://localhost:3000/leaveApplications?employeeId=${this.employeeId}`).subscribe(data => {
      this.leaveApplications = data;
    });
  }
}
