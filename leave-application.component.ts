import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
//import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';
import { AuthService} from '../service/auth.service';
//import { Employee } from '../models/employeee.model';
@Component({
  selector: 'app-leave-application',
  templateUrl: './leave-application.component.html',
  styleUrls: ['./leave-application.component.scss']
})
export class LeaveApplicationComponent implements OnInit {
  leaveForm: FormGroup;
  employees: any[] = [];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private toastr: ToastrService
  ) {
    this.leaveForm = this.fb.group({
      employeeId: ['', Validators.required],
      type: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      reason: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees() {
    this.http.get<any[]>('http://localhost:3000/posts').subscribe(data => {
      this.employees = data;
    });
  }

  onSubmit() {
    if (this.leaveForm.invalid) {
      return; // Don't submit if the form is not valid
    }

    const leaveApplication = { //create a leave application object
      employeeId: this.leaveForm.value.employeeId,
      type: this.leaveForm.value.type,
      startDate: this.leaveForm.value.startDate,
      endDate: this.leaveForm.value.endDate,
      reason: this.leaveForm.value.reason,
      status: 'Pending'
    };

    this.http.post('http://localhost:3000/leaveApplications', leaveApplication).subscribe(() => {
      this.leaveForm.reset();
      this.toastr.success('Leave application submitted successfully!', 'Success');
    });
  }
}