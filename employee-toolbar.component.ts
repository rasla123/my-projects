import { AfterViewInit, Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Employee } from '../models/employeee.model';
import { EmployeService } from '../service/employe.service';
import { Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-employee-toolbar',
  templateUrl: './employee-toolbar.component.html',
  styleUrls: ['./employee-toolbar.component.scss']
})
export class EmployeeToolbarComponent implements OnInit, AfterViewInit {
  @ViewChild('fileInput') fileInput:any;
  @ViewChild('addEmployeeButton') addEmployeeButton: any;
    employeeForm: FormGroup;
  employees: Employee[];
  employeesToDisplay: Employee[];
  //employee:any;
 
  roleoptions = [
    'Active',
    'InActive'
  ];
   
  constructor(private fb: FormBuilder, private empservice: EmployeService,  private toastr: ToastrService){
    this.employeeForm = fb.group({});
    this.employees = [];
    this.employeesToDisplay = this.employees;
  
    
  }
  
  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      firstname: this.fb.control('', [Validators.required]),
      lastname: this.fb.control('', [Validators.required]),
      birthday: this.fb.control('', [Validators.required]),
      gender: this.fb.control('', [Validators.required]),
      role: this.fb.control('default', [Validators.required]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      mobilenumber: this.fb.control('',  [Validators.pattern('^[0-9]{10}$')]),
      leavedetail: this.fb.control('', [Validators.maxLength(100)])
    
    });
  
    this.empservice.getEmployees().subscribe(res => {
      for(let empl of res){ //loop iterate each employee object in the respons
        this.employees.unshift(empl);
      }
  this.employeesToDisplay = this.employees;
    });
  }
  
  ngAfterViewInit(): void {
     
  }
  
  addEmployee() {
    if (this.employeeForm.valid) {
      let employee: Employee = {
        firstname: this.firstname.value,
        lastname: this.lastname.value, //access the form controll values
        birthday: this.birthday.value,
        gender: this.gender.value,
        role: this.roleoptions[parseInt(this.role.value)],
        email: this.email.value,
        mobilenumber: this.mobilenumber.value,
        leavedetail: this.leavedetail.value,
        profile: this.fileInput.nativeElement.files[0]?.name,
      };
      this.empservice.postEmployee(employee).subscribe((res) => {// Call the empservice to add the employee
        this.employees.unshift(res);  // Add the returned employee to the beginning of the employees array
        this.clearForm();
        this.toastr.success('Employee added successfully!', 'Success');
      },
      (error) => {
        this.toastr.error('Failed to add employee', 'Error');
      });
    } else {
      this.toastr.warning('Please fill in all required fields.', 'Warning');
    }
  }
  
  clearForm(){
   
    this.firstname.setValue('');
    this.lastname.setValue('');
    this.birthday.setValue('');
    this.gender.setValue('');
    this.role.setValue('');
    this.email.setValue('');
    this.mobilenumber.setValue('');
    this.fileInput.nativeElement.value = '';
    this.leavedetail.setValue('');
    this.employeeForm.reset();
  }
  
  
  
  
  //access control value
  public get firstname(): FormControl {
    return this.employeeForm.get('firstname') as FormControl;
  }
  
  public get lastname(): FormControl{
    return this.employeeForm.get('lastname') as FormControl;
  }
  
  public get birthday(): FormControl{
    return this.employeeForm.get('birthday') as FormControl;
  }
  
  public get gender(): FormControl{
    return this.employeeForm.get('gender') as FormControl;
  }
  
  public get role(): FormControl{
    return this.employeeForm.get('role') as FormControl;
  }
  
  public get email(): FormControl{
    return this.employeeForm.get('email') as FormControl;
  }
  
  public get mobilenumber(): FormControl{
    return this.employeeForm.get('mobilenumber') as FormControl;
  }
  public get leavedetail(): FormControl{
    return this.employeeForm.get('leavedetail') as FormControl;
  }
  
  
  removeEmployee(event:any){
    this.employees.forEach((val, index) =>{
  if(val.id == parseInt(event)){
    this.empservice.deleteEmployee(event).subscribe((res) =>{
  this.employees.splice(index, 1);
  this.toastr.success('Employee deleted successfully!', 'Success');
    });
  }
    });
  }
  
  
  editEmployee(event:any){
  this.employees.forEach((val, ind) => {
  if(val.id == event){
    this.setForm(val);
  }
  });
  this.removeEmployee(event);
  this.addEmployeeButton.nativeElement.click();
  }
  
  setForm(emp: Employee){
    this.firstname.setValue(emp.firstname);
    this.lastname.setValue(emp.lastname);
    this.birthday.setValue(emp.birthday);
    this.gender.setValue(emp.gender);
    this.leavedetail.setValue(emp.leavedetail);
    let roleIndex = 0;
    this.roleoptions.forEach((val, index)=> {
  if(val == emp.role) roleIndex = index;
    });
    this.role.setValue(roleIndex);
    this.email.setValue(emp.email);
    this.mobilenumber.setValue(emp.mobilenumber);
    this.fileInput.nativeElement.value = '';
  }











}







