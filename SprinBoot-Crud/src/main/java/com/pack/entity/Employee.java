package com.pack.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name="crud")
@Data
public class Employee {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int employeeId;
	
	private String employeeName;
	
	private String employeeContactNumber;
	
	private String employeeAddress;
	
	private String employeeGender;
	
	private String employeeDeparment;
	
	private String employeeSkills;
	
	

}
