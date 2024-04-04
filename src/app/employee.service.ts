import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient:HttpClient) { }

  api="http://localhost:8080";

  public saveEmployee(employee:Employee):Observable<Employee>
  {
    return this.httpClient.post<Employee>(`${this.api}/save/employee`,employee);
  }

  public getEmployees():Observable<Employee []>
  {
    return this.httpClient.get<Employee []>(`${this.api}/get/employee`);
  }

  public deleteEmployee(employeeId:number)
  {
     return this.httpClient.delete(`${this.api}/delete/employee/${employeeId}`)
  }
  public updateEmployee(employeeId:number)
  {
    return this.httpClient.get<Employee>(`${this.api}/get/employee/${employeeId}`)
  }

  public updateEmployees(employee:Employee)
  {
    return this.httpClient.put<Employee>(`${this.api}/update/employee`,employee);
  }
}
