import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ Employee} from '../../../src/app/models/employeee.model'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  baseurl = 'http://localhost:3000/posts';
    constructor(private http: HttpClient) { }
    
    
    getEmployees(){
      return this.http.get<Employee[]>(this.baseurl);
    }
  
    postEmployee(employee: Employee){
      return this.http.post<Employee>(this.baseurl, employee)
    }
  
    deleteEmployee(id: string){
      console.log('Deleting employee with ID:', id);
      return this.http.delete(this.baseurl + '/' + id);
    }
  
    getEmployeeById(id: number): Observable<Employee | undefined> { 
      return this.http.get<Employee>(`${this.baseurl}/${id}`);
    }


     // Add the updateEmployee method
  updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.baseurl}/${employee.id}`, employee);
  }
  }