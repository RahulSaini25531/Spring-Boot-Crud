package com.pack.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.pack.entity.Employee;

@Repository
public interface EmployeeDao extends CrudRepository<Employee, Integer> {

}
