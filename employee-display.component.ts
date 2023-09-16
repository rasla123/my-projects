import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from '../models/employeee.model';

@Component({
  selector: 'app-employee-display',
  templateUrl: './employee-display.component.html',
  styleUrls: ['./employee-display.component.scss']
})
export class EmployeeDisplayComponent implements OnInit {
  @Input() employee: Employee;
  @Output() onRemoveEmployee = new EventEmitter<number>();
  @Output() onEditEmployee = new EventEmitter<number>();
  constructor(){
    this.employee = {
      firstname: '',
      lastname:'',
      birthday:'',
      gender:'',
      role:'',
      email:'',
      mobilenumber:'',
      leavedetail:'',
      profile:'', 
    };
  }
  
  ngOnInit(): void{
    console.log(this.employee);
  }
  
  deleteEmployeeClicked(){
    console.log('Delete button clicked for employee ID:', this.employee.id);
    this.onRemoveEmployee.emit(this.employee.id);
  }
  
  editEmployeeClicked(){
    //console.log('Edit button clicked for employee ID:', this.employee.id);
    this.onEditEmployee.emit(this.employee.id);
  }
  
  
  }