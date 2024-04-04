import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {
 dataSource: Employee[] = [];
  displayedColumns: string[] = ['employeeId', 'employeeName', 'employeeContactNumber', 'employeeAddress','employeeGender','employeeDeparment','employeeSkills','edit','delete'];


constructor(private employeeService:EmployeeService,private router:Router){
this.getEmployeeList();

}


  ngOnInit(): void {
    
  }

  getEmployeeList():void{
    this.employeeService.getEmployees().subscribe(
      {
        next:(res:Employee[])=>
        {
          this.dataSource=res;
        },
        error:(err:HttpErrorResponse)=>
        {
          console.log(err);
        }
      }
    );
  }

  deleteEmployee(employeeId:number):void
  {
    this.employeeService.deleteEmployee(employeeId).subscribe(
      {
        next : (res)=>
        {
           console.log(res); 
           this.getEmployeeList();
        },
        error:(err:HttpErrorResponse)=>
        {
          console.log(err);
        }
      }
     );
  }

  updateEmployee(employeeId:number):void{
     this.router.navigate(['employee',{employeeId:employeeId}])
  }

}
