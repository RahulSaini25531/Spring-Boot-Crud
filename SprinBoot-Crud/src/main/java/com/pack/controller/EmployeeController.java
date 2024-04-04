package com.pack.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.pack.entity.Employee;
import com.pack.service.EmployeeService;

@RestController
@CrossOrigin("http://localhost:4200")
public class EmployeeController {
	
	@Autowired
	private EmployeeService employeeService;
	
	@PostMapping("/save/employee")
	public Employee saveEmployee(@RequestBody Employee employee)
	{
		return employeeService.saveEmployee(employee);
	}
	
	
	@GetMapping("/get/employee")
	public List<Employee> getEmployees()
	{
		return employeeService.getEmployees();
	}
	
	@GetMapping("/get/employee/{employeeId}")
	public Employee getEmployee(@PathVariable int  employeeId)
	{
		return employeeService.getEmployees(employeeId);
	}

	
	@DeleteMapping("delete/employee/{empId}")
	public void deleteEmployee(@PathVariable int empId)
	{
		employeeService.deleteEmployee(empId);
	}
	
	@PutMapping("/update/employee")
	public Employee updatEmployee( @RequestBody Employee employee )
	{
		return employeeService.updatEmployee(employee);
	}
}
