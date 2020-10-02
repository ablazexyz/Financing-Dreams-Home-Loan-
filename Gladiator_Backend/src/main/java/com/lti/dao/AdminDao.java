package com.lti.dao;

import java.util.List;

import com.lti.model.Application;
import com.lti.model.Loan;

public interface AdminDao {
	
	public List<Application> getAllApplications();

	public void approveAppl(int applId, String loanRemarks);

	public Application rejectAppl(int applId, String loanRemarks);

	public List<Loan> getApprovedLoans();

}
