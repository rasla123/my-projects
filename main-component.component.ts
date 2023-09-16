import { Component } from '@angular/core';
import { Employee} from '../models/employeee.model';
import { EmployeService} from '../service/employe.service'
@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss']
})
export class MainComponentComponent {
  employeesToDisplay: Employee[] = [];

  constructor(private empService: EmployeService) { }

  ngOnInit(): void {
    this.fetchEmployees();
  }

  fetchEmployees(): void {
    this.empService.getEmployees().subscribe(
      (employees: Employee[]) => {
        this.employeesToDisplay = employees;
      },
      (error) => {
        console.error('Error fetching employees:', error);
      }
    );
  }
}


