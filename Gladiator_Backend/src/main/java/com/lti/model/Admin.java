package com.lti.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "ADMIN_TBL")
public class Admin {
	
	@Id
	@Column(name = "ADMIN_EMAIL")
	private String ademail;
	
	@Column(name = "ADMIN_PASS" )
	private String adpassword;
	
	@Column(name = "ADMIN_NAME")
	private String adname;

	public String getAdemail() {
		return ademail;
	}

	public void setAdemail(String ademail) {
		this.ademail = ademail;
	}

	public String getAdpassword() {
		return adpassword;
	}

	public void setAdpassword(String adpassword) {
		this.adpassword = adpassword;
	}

	public String getAdname() {
		return adname;
	}

	public void setAdname(String adname) {
		this.adname = adname;
	}
	
	
	
}
