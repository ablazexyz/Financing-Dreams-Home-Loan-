package com.lti.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lti.model.Application;
import com.lti.model.Loan;
import com.lti.model.LoanStatus;
import com.lti.service.adminService;

@RestController
@CrossOrigin
@RequestMapping(path = "admin")
//http://localhost:9091/HomeApp/admin/
public class AdminController {
	
	@Autowired
	private adminService service;
	
	// http://localhost:9091/HomeApp/admin/applications
	@GetMapping(path = "applications")
	public List<Application> getPendingApplications(){
		
		return service.findAllApplication();
		
	}
	

	// http://localhost:9091/HomeApp/admin/loans
	@GetMapping(path = "loans")
	public List<Loan> getApprovedLoans(){
		
		return service.findApprovedLoans();
		
	}
	
	// http://localhost:9091/HomeApp/admin/approve
	@PostMapping(path = "approve")
	public void verifyApplication(@RequestBody LoanStatus loan) {
		
		service.verifyAppl(loan.getApplId(),loan.getLoanRemarks());
		
	}
	
	// http://localhost:9091/HomeApp/admin/reject
	@PostMapping(path = "reject")
	public Application rejectApplication(@RequestBody LoanStatus loan) {
		
		return service.rejectAppl(loan.getApplId(),loan.getLoanRemarks());
		
	}
}
