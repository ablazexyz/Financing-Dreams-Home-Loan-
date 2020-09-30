package com.lti.model;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.springframework.stereotype.Component;


@Component
@Entity
@Table(name = "ACCOUNT_TBL")
@SequenceGenerator(name="acc_seq", initialValue=100000001, allocationSize=100)
public class Account {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "acc_seq")
	@Column(name = "ACCOUNT_NUMBER")
	private int AccountNo;
	
	@Column(name = "ACCOUNT_BALANCE")
	private double balance;

	@Column(name = "ACCOUNT_CUSTOMER_ID")
	private int cust_id;
	
	@OneToMany(mappedBy = "account")
	private Set<Loan> loans;
	

	public Account() {
		super();
	}
	
	public void addLoan(Loan loan) {
		loans.add(loan);
	}
	
	public Set<Loan> getLoans() {
		return loans;
	}

	public void setLoans(Set<Loan> loans) {
		this.loans = loans;
	}

	public double getBalance() {
		return balance;
	}

	public void setBalance(double balance) {
		this.balance = balance;
	}

	public int getAccountNo() {
		return AccountNo;
	}

	public void setAccountNo(int accountNo) {
		AccountNo = accountNo;
	}

	public int getCust_id() {
		return cust_id;
	}

	public void setCust_id(int cust_id) {
		this.cust_id = cust_id;
	}
	
	
}
