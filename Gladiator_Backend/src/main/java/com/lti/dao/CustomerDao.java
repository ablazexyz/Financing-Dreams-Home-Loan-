package com.lti.dao;

import java.util.List;

import com.lti.model.Admin;
import com.lti.model.Customer_Details;
import com.lti.model.Registration;

public interface CustomerDao {
	
	public void addRegistration(Registration reg);
	
	public void updateRegistration(Registration reg);
	
	public Registration getRegistrationDetailsbyEmail(String email);
	
	public Admin getAdminDetailsbyEmail(String email);
	
	public List<Registration> getAllRegistrations();
	
	public List<Admin> getAllAdmins() ;
	
	public Customer_Details getCustomerDetailsbyEmail(String email);
	
	//public List<Application> getAllApplicationsbyEmail(String email);
	
	public List<Customer_Details> getAllCustomerDetails();
	
	//public List<Application> getAllApplications();
}
