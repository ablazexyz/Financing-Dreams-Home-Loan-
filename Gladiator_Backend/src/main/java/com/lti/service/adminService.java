package com.lti.service;

import java.util.List;

import com.lti.dto.LoanDto;
import com.lti.model.Account;
import com.lti.model.Application;
import com.lti.model.Loan;

public interface adminService {
	
	public List<Application> findAllApplication();

	public Application verifyAppl(int applId, String string);

	public Application rejectAppl(int applId, String loanRemarks);

	public List<Application> findApprovedLoans();

	public Account findAccountByCustId(int cid);

	
}
