package com.lti.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.lti.dao.AdminDao;
import com.lti.dto.LoanDto;
import com.lti.model.Account;
import com.lti.model.Application;
import com.lti.model.Loan;

@Service("AdminService")
@Scope(scopeName = "singleton")
public class AdminServiceImpl implements adminService{

	@Autowired
	AdminDao dao;
	
	@Override
	public List<Application> findAllApplication() {
		return dao.getAllApplications();
	}

	@Override
	@Transactional(propagation = Propagation.REQUIRED)
	public Application verifyAppl(int applId, String loanRemarks) {
		
		return dao.approveAppl(applId, loanRemarks);
		
	}

	@Override
	@Transactional(propagation = Propagation.REQUIRED)
	public Application rejectAppl(int applId, String loanRemarks) {
		
		return dao.rejectAppl(applId,loanRemarks);
		
	}

	@Override
	public List<Application> findApprovedLoans() {
		
		return dao.getApprovedLoans();
	}

	@Override
	public Account findAccountByCustId(int cid) {
		
		return dao.getAccountByCustId(cid);
	}

	

}
