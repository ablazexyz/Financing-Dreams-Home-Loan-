package com.lti.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component("login")
@Scope(scopeName = "prototype")
public class Login {
	
	
	private String ademail;
	

	private String adpass;

	
	public Login() {
		super();
	}

	public Login(String ademail, String adpass) {
		super();
		this.ademail = ademail;
		this.adpass = adpass;
	}

	public String getAdemail() {
		return ademail;
	}

	public void setAdemail(String ademail) {
		this.ademail = ademail;
	}

	public String getAdpass() {
		return adpass;
	}

	public void setAdpass(String adpass) {
		this.adpass = adpass;
	}

	@Override
	public String toString() {
		return "Login [ademail=" + ademail + ", adpass=" + adpass + "]";
	}
	
	
	
	
}
