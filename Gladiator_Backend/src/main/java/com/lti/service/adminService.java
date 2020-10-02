package com.lti.service;

import java.util.List;

import com.lti.model.Application;
import com.lti.model.Loan;

public interface adminService {
	
	public List<Application> findAllApplication();

	public void verifyAppl(int applId, String string);

	public Application rejectAppl(int applId, String loanRemarks);

	public List<Loan> findApprovedLoans();

	
}
