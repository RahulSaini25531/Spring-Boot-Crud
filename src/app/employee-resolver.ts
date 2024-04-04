import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { EmployeeService } from "./employee.service";
import { Employee } from "./employee/employee.model";

export const EmployeeResolver:ResolveFn<any>=
(route:ActivatedRouteSnapshot,
    state:RouterStateSnapshot,
    employeeService:EmployeeService=inject(EmployeeService)):Observable<Employee>=>
    {
        const empployeeId = route.paramMap.get("employeeId");
        if(empployeeId)
        {
          return employeeService.updateEmployee((Number)(empployeeId));
        }else
        {
            const employee:Employee = {
                employeeId: 0,
                employeeName: '',
                employeeContactNumber: '',
                employeeAddress: '',
                employeeGender: '',
                employeeDeparment: '',
                employeeSkills: ''
              }
             return of(employee);
        }
    }