package com.lti.model;

public class LoanStatus {
	
	public int applId;
	public String loanRemarks;
	
	public LoanStatus() {
		super();
	}
	public LoanStatus(int applId, String loanRemarks) {
		super();
		this.applId = applId;
		this.loanRemarks = loanRemarks;
	}
	public int getApplId() {
		return applId;
	}
	public void setApplId(int applId) {
		this.applId = applId;
	}
	public String getLoanRemarks() {
		return loanRemarks;
	}
	public void setLoanRemarks(String loanRemarks) {
		this.loanRemarks = loanRemarks;
	}
	@Override
	public String toString() {
		return "LoanStatus [applId=" + applId + ", loanRemarks=" + loanRemarks + "]";
	}
	
	
}
