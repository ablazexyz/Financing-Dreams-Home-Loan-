package com.lti.dto;

import com.lti.model.Account;
import com.lti.model.Application;

public class LoanDto {

	private int LoanId;
	
	private Application application;
	
	private Account account;

	public LoanDto() {
		super();
	}

	public LoanDto(int loanId, Application application, Account account) {
		super();
		LoanId = loanId;
		this.application = application;
		this.account = account;
	}

	public int getLoanId() {
		return LoanId;
	}

	public void setLoanId(int loanId) {
		LoanId = loanId;
	}

	public Application getApplication() {
		return application;
	}

	public void setApplication(Application application) {
		this.application = application;
	}

	public Account getAccount() {
		return account;
	}

	public void setAccount(Account account) {
		this.account = account;
	}

	@Override
	public String toString() {
		return "LoanDto [LoanId=" + LoanId + ", application=" + application + ", account=" + account + "]";
	}
	
	

}
