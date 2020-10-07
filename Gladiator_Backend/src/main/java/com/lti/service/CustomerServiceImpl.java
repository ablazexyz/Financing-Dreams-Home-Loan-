package com.lti.service;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.text.DecimalFormat;
import java.time.Instant;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.lti.dao.CustomerDao;
import com.lti.dto.EmiDto;
import com.lti.model.Account;
import com.lti.model.Admin;
import com.lti.model.Application;
import com.lti.model.Customer_Details;
import com.lti.model.Login;
import com.lti.model.Registration;

@Service("service")
@Scope(scopeName = "singleton")
public class CustomerServiceImpl implements CustomerService{

	@Autowired
	CustomerDao dao;
	
	@Transactional(propagation = Propagation.REQUIRED)
	public void createRegistration(Registration reg) {
	
		dao.addRegistration(reg);

	}
	
	@Transactional(propagation = Propagation.REQUIRED)
	public Registration modifyRegistration(Registration reg) {
		
		return dao.updateRegistration(reg);
	}
	
	
	@Transactional(propagation = Propagation.REQUIRED)
	public void createApplication(Application appl) {
		
		dao.addApplication(appl);
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
	
	/*
	public List<Application> findAllApplications(){
		
		return dao.getAllApplications();
	}
	*/
	
	public boolean verifyAdLogin(Login login) {
		
		try {
			Admin adm = dao.getAdminDetailsbyEmail(login.getAdemail());
			if (adm.getAdpassword().equals(login.getAdpass())) {
				return true;
			}
			
		}
		catch(Exception e) {
			return false;
		}
		return false;
		
	}
	
	public boolean verifyLogin(Login login) {
		
		try {
			Registration reg = dao.getRegistrationDetailsbyEmail(login.getAdemail());
			if (reg.getPassword().equals(login.getAdpass())) {
				return true;
			}
			
		}
		catch(Exception e) {
			return false;
		}
		return false;
		
	}

	@Override
	public boolean isFirstTimeUser(String emailId) {
		
		return dao.isFirstTimeUser(emailId);
	}

	@Override
	public Application findApplicationById(int applId) {
		
		return dao.getApplicationById(applId);
		
	}

	@Override
	public Account findAccountByEmail(String email) {
		
		return dao.getAccountByEmail(email);
	}

	@Override
	@Transactional(propagation = Propagation.REQUIRED)
	public void modifyApplication(Application appl) {
		
		dao.updateApplication(appl);
		
	}

	@Override
	@Transactional(propagation = Propagation.REQUIRED)
	public Customer_Details modifyCustomerDetails(Customer_Details cd) {
		
		return dao.updateCustomerDetails(cd);
	}
	
	public double EMICalculate(double loanAmount, int termInYears, double interestRate) {
		interestRate /= 100.0;
		double monthlyRate = interestRate / 12.0;
		int termInMonths = termInYears * 12;
		double monthlyPayment = (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -termInMonths));
		return BigDecimal.valueOf(monthlyPayment).setScale(2, RoundingMode.HALF_UP).doubleValue();
	}

	public List<EmiDto> calculateEmi(double loanAmount, int termInYears, double interestRate,LocalDate appdate)
	{
		
		double monthlyPayment = EMICalculate(loanAmount, termInYears, interestRate);
		DecimalFormat d = new DecimalFormat("#");
		
		List<EmiDto> emi = new ArrayList<>();
		LocalDate approvedDate = appdate;
	      int paymentNo = 1;
	      String status="PENDING";
	      double beginningbalance = loanAmount;
	      while(paymentNo<=termInYears*12)
	      {
	    	  if(LocalDate.now().compareTo(approvedDate.plusMonths(paymentNo))>=0)
	    		  status = "PAID";
	    	  else
	    		  status="PENDING";
	    	  
	    	  double interest = beginningbalance*interestRate/1200;
	    	  double principal = monthlyPayment-interest;
	    	  double endingbalance = beginningbalance - principal;
	    	  EmiDto e = new EmiDto(approvedDate.plusMonths(paymentNo),d.format(beginningbalance),d.format(monthlyPayment),d.format(principal),d.format(interest),d.format(Math.abs(endingbalance)),status);
	    	  emi.add(e);
	    	  paymentNo++;
	    	  beginningbalance = endingbalance;
	      }
		return emi;
	}
	
}
