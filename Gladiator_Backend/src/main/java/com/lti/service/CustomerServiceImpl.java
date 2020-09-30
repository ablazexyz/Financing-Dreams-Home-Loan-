package com.lti.service;

import java.util.List;

import com.lti.dao.CustomerDaoImpl;
import com.lti.model.Admin;
import com.lti.model.Application;
import com.lti.model.Customer_Details;
import com.lti.model.Registration;

public class CustomerServiceImpl {
	
	CustomerDaoImpl dao = new CustomerDaoImpl();
	
	public void createRegistration(Registration reg) {
		
		dao.beginTransaction();
		dao.addRegistration(reg);
		dao.commitTransaction();
		
	}
	
	public Registration findRegistrationDetailsbyEmail(String email) {
		
		return dao.getRegistrationDetailsbyEmail(email);
	}
	
	public List<Registration> findAllRegistrations(){
		
		return dao.getAllRegistrations();
	}
	
	public List<Admin> findAllAdmins() {
		
		return dao.getAllAdmins();
	}
	
	
	public Customer_Details findCustomerDetailsbyEmail(String email) {
		
		return dao.getCustomerDetailsbyEmail(email);
	}
	
	public List<Application> findAllApplicationsbyEmail(String email){
		
		return dao.getAllApplicationsbyEmail(email);
	}
	
	public List<Customer_Details> findAllCustomerDetails(){
		
		return dao.getAllCustomerDetails();
	}
	
	public List<Application> findAllApplications(){
		
		return dao.getAllApplications();
	}
}
