package com.pack.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.pack.dao.EmployeeDao;
import com.pack.entity.Employee;

@Service
public class EmployeeService {
    @Autowired
	private EmployeeDao dao;
	
	public Employee saveEmployee(Employee employee)
	{
		return dao.save(employee);
	}
	
	public List<Employee> getEmployees()
	{
		List<Employee> employee = new ArrayList<>();
		dao.findAll().forEach(employee::add);
		return employee;
	}
	
	public Employee getEmployees(int employeeId)
	{
		return dao.findById(employeeId).orElseThrow();
	}
	
	public void deleteEmployee(int empId)
	{
		dao.deleteById(empId);
	}
	
	public Employee updatEmployee(Employee employee )
	{
		dao.findById(employee.getEmployeeId()).orElseThrow();
		return dao.save(employee);
	}
}
