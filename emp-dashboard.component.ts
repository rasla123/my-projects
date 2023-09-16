import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../service/employe.service';
import{Employee} from '../models/employeee.model';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-emp-dashboard',
  templateUrl: './emp-dashboard.component.html',
  styleUrls: ['./emp-dashboard.component.scss']
})
export class EmpDashboardComponent  {
  isEditing: boolean = false;
  employee: Employee | undefined;
  id: number = -1;
  

  constructor(private route: ActivatedRoute, private employeeService: EmployeService) {}

  ngOnInit(): void {
    const userIdFromLocalStorage = localStorage.getItem('userId'); //retrieves user ID from Local Storage sets the id property accordingly.
    this.id = userIdFromLocalStorage ? +userIdFromLocalStorage : -1;
    this.loadEmployee(this.id);
  }

  loadEmployee(id: number): void { //to fetch employee data using the ID
    this.employeeService.getEmployeeById(id).subscribe((employee: Employee | undefined) => {
      if (employee) {
        this.employee = employee;
      }
    });
  }

  
  startEdit() {
    this.isEditing = true; //sets editing property true
  }

  saveChanges() {
    if (this.employee) { //it means there's an employee object being edited
      this.employeeService.updateEmployee(this.employee).subscribe(() => {
        this.isEditing = false;
        // Optionally, reload the employee data
        this.loadEmployee(this.id);
      });
    }
  }

  cancelEdit() {
    this.isEditing = false;
  }
  }
  






  









