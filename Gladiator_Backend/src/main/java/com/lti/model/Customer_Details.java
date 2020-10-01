package com.lti.model;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

@Entity
@Table(name = "CUSTOMER_TBL")
public class Customer_Details implements Serializable{
	
	@Id
	@Column(name = "CUSTOMER_ID")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int customer_id;
	
	@Column(name = "CUSTOMER_AADHAR")
	private String aadhar;
	
	@Column(name = "CUSTOMER_SALARY")
	private double salary;
	
	@Column(name = "CUSTOMER_PAN")
	private String pan;
	
	@Column(name = "EMPLOYMENT_TYPE")
	private String emptype;
	
	@Column(name = "EMPLOYMENT_ORG_TYPE")
	private String orgtype;
	
	@Column(name = "EMPLOYER_NAME")
	private String empname;
	
	@Column(name = "RETIREMENT_AGE")
	private int retireage;
	
	@Column(name = "CUSTOMER_PAN_URL")
	private String panURL;
	
	@Column(name = "CUSTOMER_VOTER_URL")
	private String voterURL;
	
	@Column(name = "CUSTOMER_SALARY_URL")
	private String salaryURL;
	
	@OneToOne(mappedBy = "cdetails", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private Registration registration;
	
	@JsonProperty(access = Access.WRITE_ONLY)
	@OneToMany(mappedBy = "cdetails2", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private Set<Application> applications;

	
	public void addApplications(Application appl) {
		
		applications.add(appl);
	}

	
	public Customer_Details() {
		super();
	}
	
	

	public Customer_Details(String aadhar, double salary) {
		super();
		this.aadhar = aadhar;
		this.salary = salary;
	}

	//Getters And Setters for Customer_Details Fields
	public int getCustomer_id() {
		return customer_id;
	}

	public void setCustomer_id(int customer_id) {
		this.customer_id = customer_id;
	}

	
	public String getAadhar() {
		return aadhar;
	}

	public void setAadhar(String aadhar) {
		this.aadhar = aadhar;
	}

	public double getSalary() {
		return salary;
	}

	public void setSalary(double salary) {
		this.salary = salary;
	}
	
	public String getPan() {
		return pan;
	}

	public void setPan(String pan) {
		this.pan = pan;
	}

	public String getEmptype() {
		return emptype;
	}

	public void setEmptype(String emptype) {
		this.emptype = emptype;
	}

	public int getRetireage() {
		return retireage;
	}

	public void setRetireage(int retireage) {
		this.retireage = retireage;
	}

	public String getOrgtype() {
		return orgtype;
	}

	public void setOrgtype(String orgtype) {
		this.orgtype = orgtype;
	}

	public String getEmpname() {
		return empname;
	}

	public void setEmpname(String empname) {
		this.empname = empname;
	}

	public String getPanURL() {
		return panURL;
	}

	public void setPanURL(String panURL) {
		this.panURL = panURL;
	}

	public String getVoterURL() {
		return voterURL;
	}

	public void setVoterURL(String voterURL) {
		this.voterURL = voterURL;
	}

	public String getSalaryURL() {
		return salaryURL;
	}

	public void setSalaryURL(String salaryURL) {
		this.salaryURL = salaryURL;
	}

	

	
	@Override
	public String toString() {
		return "Customer_Details [customer_id=" + customer_id + ", aadhar=" + aadhar + ", salary=" + salary + "]";
	}

	//Getters and Setters for Linking
	public Registration getRegistration() {
		return registration;
	}

	public void setRegistration(Registration registration) {
		this.registration = registration;
	}

	
	public Set<Application> getApplications() {
		return applications;
	}

	public void setApplications(Set<Application> applications) {
		this.applications = applications;
	}


	
	
	
}
