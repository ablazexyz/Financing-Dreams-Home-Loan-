package com.lti.service;

import java.util.List;

import com.lti.model.Admin;
import com.lti.model.Customer_Details;
import com.lti.model.Login;
import com.lti.model.Registration;

public interface CustomerService {
	
	public void createRegistration(Registration reg);
	
	public Registration findRegistrationDetailsbyEmail(String email);
	
	public List<Registration> findAllRegistrations();
	
	public List<Admin> findAllAdmins();
	
	public Customer_Details findCustomerDetailsbyEmail(String email);
	
	//public List<Application> findAllApplicationsbyEmail(String email);
	
	public List<Customer_Details> findAllCustomerDetails();
	
	//public List<Application> findAllApplications();
	
	public boolean verifyLogin(Login login) ;
}
