package com.lti.service;

import java.util.List;

import com.lti.model.Application;

public interface adminService {
	
	public List<Application> findAllApplication();

	public void verifyAppl(int applId, String string);

	public Application rejectAppl(int applId, String loanRemarks);
}
