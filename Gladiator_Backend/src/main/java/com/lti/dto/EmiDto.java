package com.lti.dto;

import java.time.LocalDate;

public class EmiDto {
	
	private LocalDate date;
	private String beginningBalance;
	private String emi;
	private String principal;
	private String interest;
	private String endingBalance;
	private String status;
	
	public EmiDto()
	{
		super();
	}
	public EmiDto(LocalDate date, String beginningBalance, String emi, String principal, String interest,
			String endingBalance,String status) {
		super();
		this.date = date;
		this.beginningBalance = beginningBalance;
		this.emi = emi;
		this.principal = principal;
		this.interest = interest;
		this.endingBalance = endingBalance;
		this.status = status;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public LocalDate getDate() {
		return date;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	}

	@Override
	public String toString() {
		return "EmiClass [date=" + date + ", beginningBalance=" + beginningBalance + ", EMI=" + emi + ", principal="
				+ principal + ", interest=" + interest + ", endingBalance=" + endingBalance + ", status=" + status
				+ "]";
	}
	
	
	
	public String getBeginningBalance() {
		return beginningBalance;
	}
	public void setBeginningBalance(String beginningBalance) {
		this.beginningBalance = beginningBalance;
	}
	public String getEmi() {
		return emi;
	}
	public void setEmi(String emi) {
		this.emi = emi;
	}
	public String getPrincipal() {
		return principal;
	}
	public void setPrincipal(String principal) {
		this.principal = principal;
	}
	public String getInterest() {
		return interest;
	}
	public void setInterest(String interest) {
		this.interest = interest;
	}
	public String getEndingBalance() {
		return endingBalance;
	}
	public void setEndingBalance(String endingBalance) {
		this.endingBalance = endingBalance;
	}

}
