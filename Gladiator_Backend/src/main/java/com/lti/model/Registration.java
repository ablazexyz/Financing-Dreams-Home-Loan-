package com.lti.model;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "REGISTRATION_TBL")
public class Registration implements Serializable{
	
	@Id
	@Column(name = "CUSTOMER_EMAIL")
	private String emailId;
	
	@Column(name = "CUSTOMER_NAME")
	private String name;
	
	@Column(name = "PASSWORD")
	private String password;
	
	@Column(name = "CUSTOMER_GENDER")
	private String gender;
	
	@Column(name = "CUSTOMER_NATIONALITY")
	private String nationality;
	
	@Column(name = "CUSTOMER_MOBILE")
	private String mnumber;
	
	@Column(name = "CUSTOMER_DOB")
	private Date dob;
	
	

	public Registration() {
		super();
	}
	
	@OneToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "Registration_Customer_Id")
	private Customer_Details cdetails;

	public Registration(String emailId, String cname, String cpass, String cnumber) {
		super();
		this.emailId = emailId;
		this.name = cname;
		this.password = cpass;
		this.mnumber = cnumber;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getNationality() {
		return nationality;
	}

	public void setNationality(String nationality) {
		this.nationality = nationality;
	}

	public String getMnumber() {
		return mnumber;
	}

	public void setMnumber(String mnumber) {
		this.mnumber = mnumber;
	}

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	public Customer_Details getCdetails() {
		return cdetails;
	}

	public void setCdetails(Customer_Details cdetails) {
		this.cdetails = cdetails;
	}

	@Override
	public String toString() {
		return "Registration [emailId=" + emailId + ", name=" + name + ", password=" + password + ", gender=" + gender
				+ ", nationality=" + nationality + ", mnumber=" + mnumber + ", dob=" + dob + ", cdetails=" + cdetails
				+ "]";
	}
	
	
}
