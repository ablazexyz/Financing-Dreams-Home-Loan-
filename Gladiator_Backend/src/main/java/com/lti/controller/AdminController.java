package com.lti.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lti.dto.LoanDto;
import com.lti.model.Account;
import com.lti.model.Application;
import com.lti.model.Loan;
import com.lti.model.LoanStatus;
import com.lti.service.MailService;
import com.lti.service.adminService;

@RestController
@CrossOrigin
@RequestMapping(path = "admin")
//http://localhost:9091/HomeApp/admin/
public class AdminController {

	@Autowired
	private adminService service;

	// http://localhost:9091/HomeApp/admin/applications
	@GetMapping(path = "applications")
	public List<Application> getPendingApplications() {

		return service.findAllApplication();

	}

	// http://localhost:9091/HomeApp/admin/loans
	@GetMapping(path = "loans")
	public List<LoanDto> getApprovedLoans() {

		List<Application> approved = service.findApprovedLoans();

		List<LoanDto> loans = new ArrayList<>();
		for (Application appl : approved) {

			int cid = appl.getCdetails2().getCustomer_id();
			Account ac = service.findAccountByCustId(cid);

			LoanDto loandto = new LoanDto(appl.getLoan().getLoanId(), appl, ac);
			loans.add(loandto);
		}

		return loans;

	}

	// http://localhost:9091/HomeApp/admin/approve
	@PostMapping(path = "approve")
	public void verifyApplication(@RequestBody LoanStatus loan) {

		Application appl = service.verifyAppl(loan.getApplId(), loan.getLoanRemarks());

		String name = appl.getCdetails2().getRegistration().getFirstName() + " "
				+ appl.getCdetails2().getRegistration().getLastName();

		MailService.send(appl.getCdetails2().getRegistration().getEmailId(), "Loan Application Approved", name,
				appl.getApplicationId(), appl.getLoanAmt());
	}

	// http://localhost:9091/HomeApp/admin/reject
	@PostMapping(path = "reject")
	public Application rejectApplication(@RequestBody LoanStatus loan) {

		Application appl = service.rejectAppl(loan.getApplId(), loan.getLoanRemarks());

		String name = appl.getCdetails2().getRegistration().getFirstName() + " "
				+ appl.getCdetails2().getRegistration().getLastName();

		MailService.send(appl.getCdetails2().getRegistration().getEmailId(), "Loan Application Rejected", name,
				appl.getApplicationId(), appl.getLoanAmt(),appl.getLoanRemarks());
		
		return appl;

	}
}
