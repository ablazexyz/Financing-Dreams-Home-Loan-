package com.lti.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "APPLICATION_TBL")
public class Application {
	
	@Id
	@Column(name = "APPLICATION_ID")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int applicationId;

	@Column(name = "PROPERTY_LOCATION")
	private String propertyLocation;
	
	@Column(name = "PROPERTY_NAME")
	private String propertyName;
	
	@Column(name = "PROPERTY_ESTIMATED_AMOUNT")
	private double propertyAmt;
	
	@Column(name = "LOAN_AMOUNT")
	private double loanAmt;
	
	@Column(name = "RATE_OF_INTERST")
	private double roi;
	
	@Column(name = "TENURE")
	private int tenure;
	
	@Column(name = "LOAN_STATUS")
	private String loanStatus;
	
	@Column(name = "LOAN_REMARKS")
	private String loanRemarks;
	
	@Column(name = "LOA_URL")
	private String loaURL;
	
	@Column(name = "NOC_URL")
	private String nocURL;
	
	@Column(name = "AGREEMENT_URL")
	private String agreementURL;
	

	@ManyToOne
	@JoinColumn(name = "Application_Customer_ID")
	private Customer_Details cdetails2;
	
	@OneToOne(mappedBy = "application", cascade = CascadeType.ALL)
	private Loan loan;
	
	public Application() {
		super();
	}

	public Application(String propertyLocation, double loanAmt) {
		super();
		this.propertyLocation = propertyLocation;
		this.loanAmt = loanAmt;
	}

	//GETTERS AND SETTERS FOR TABLE PROPERTIES
	public int getApplicationId() {
		return applicationId;
	}

	public void setApplicationId(int applicationId) {
		this.applicationId = applicationId;
	}

	public String getPropertyLocation() {
		return propertyLocation;
	}

	public void setPropertyLocation(String propertyLocation) {
		this.propertyLocation = propertyLocation;
	}

	public String getPropertyName() {
		return propertyName;
	}

	public void setPropertyName(String propertyName) {
		this.propertyName = propertyName;
	}

	public double getPropertyAmt() {
		return propertyAmt;
	}

	public void setPropertyAmt(double propertyAmt) {
		this.propertyAmt = propertyAmt;
	}

	public double getLoanAmt() {
		return loanAmt;
	}

	public void setLoanAmt(double loanAmt) {
		this.loanAmt = loanAmt;
	}

	public double getRoi() {
		return roi;
	}

	public void setRoi(double roi) {
		this.roi = roi;
	}

	public int getTenure() {
		return tenure;
	}

	public void setTenure(int tenure) {
		this.tenure = tenure;
	}

	public String getLoanStatus() {
		return loanStatus;
	}

	public void setLoanStatus(String loanStatus) {
		this.loanStatus = loanStatus;
	}

	public String getLoanRemarks() {
		return loanRemarks;
	}

	public void setLoanRemarks(String loanRemarks) {
		this.loanRemarks = loanRemarks;
	}

	public String getLoaURL() {
		return loaURL;
	}

	public void setLoaURL(String loaURL) {
		this.loaURL = loaURL;
	}

	public String getNocURL() {
		return nocURL;
	}

	public void setNocURL(String nocURL) {
		this.nocURL = nocURL;
	}

	public String getAgreementURL() {
		return agreementURL;
	}

	public void setAgreementURL(String agreementURL) {
		this.agreementURL = agreementURL;
	}

	public Loan getLoan() {
		return loan;
	}

	public void setLoan(Loan loan) {
		this.loan = loan;
	}

	@Override
	public String toString() {
		return "Application [applicationId=" + applicationId + ", propertyLocation=" + propertyLocation + ", loanAmt="
				+ loanAmt + "]";
	}

	
	public String showApplication() {
		return "Application [applicationId=" + applicationId + ", propertyLocation=" + propertyLocation
				+ ", propertyName=" + propertyName + ", propertyAmt=" + propertyAmt + ", loanAmt=" + loanAmt + ", roi="
				+ roi + ", tenure=" + tenure + ", loanStatus=" + loanStatus + ", loanRemarks=" + loanRemarks
				+ ", loaURL=" + loaURL + ", nocURL=" + nocURL + ", agreementURL=" + agreementURL + ", cdetails2="
				+ cdetails2 + ", loan=" + loan + "]";
	}

	//GETTER AND SETTER FOR MAPPING
	public Customer_Details getCdetails2() {
		return cdetails2;
	}



	public void setCdetails2(Customer_Details cdetails2) {
		this.cdetails2 = cdetails2;
	}

	
}
