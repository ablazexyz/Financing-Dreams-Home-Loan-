package com.lti.model;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonFormat;

@Component
@Scope(scopeName = "prototype")
@Entity
@Table(name = "REGISTRATION_TBL")
public class Registration implements Serializable{
	
	@Id
	@Column(name = "CUSTOMER_EMAIL")
	private String emailId;
	
	@Column(name = "CUSTOMER_FIRST_NAME")
	private String firstName;
	
	@Column(name = "CUSTOMER_LAST_NAME")
	private String lastName;
	
	@Column(name = "PASSWORD")
	private String password;
	
	@Column(name = "CUSTOMER_GENDER")
	private String gender;
	
	@Column(name = "CUSTOMER_NATIONALITY")
	private String nationality;
	
	@Column(name = "CUSTOMER_MOBILE")
	private String phoneNumber;
	
	@Column(name = "CUSTOMER_DOB")
	@JsonFormat(pattern = "yyyy-MM-dd")
	private LocalDate dob;
	
	

	public Registration() {
		super();
	}
	
	@OneToOne(cascade = CascadeType.MERGE, fetch = FetchType.LAZY)
	@JoinColumn(name = "Registration_Customer_Id")
	private Customer_Details cdetails;

	public Registration(String emailId, String cname, String cpass, String cnumber) {
		super();
		this.emailId = emailId;
		this.firstName = cname;
		this.password = cpass;
		this.phoneNumber = cnumber;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	
	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
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

	
	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public LocalDate getDob() {
		return dob;
	}

	public void setDob(LocalDate dob) {
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
		return "Registration [emailId=" + emailId + ", name=" + firstName + ", password=" + password + ", gender=" + gender
				+ ", nationality=" + nationality + ", mnumber=" + phoneNumber + ", dob=" + dob + ", cdetails=" + cdetails
				+ "]";
	}
	
	
}
