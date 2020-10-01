package com.lti.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lti.model.Customer_Details;
import com.lti.model.Login;
import com.lti.model.Registration;
import com.lti.service.CustomerService;

@RestController
@CrossOrigin
@RequestMapping(path = "users")
// http://localhost:9091/HomeApp/users
public class UserController {

	@Autowired
	private CustomerService service;

	// http://localhost:9091/HomeApp/users/adlogin
	@PostMapping(path = "adlogin")
	public ResponseEntity<String> loginadmin(@RequestBody Login login) {

		boolean result = service.verifyAdLogin(login);
		if (result) {
			return ResponseEntity.ok("Login Success");
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	// http://localhost:9091/HomeApp/users/login
	@PostMapping(path = "login")
	public ResponseEntity<String> loginuser(@RequestBody Login login) {

		boolean result = service.verifyLogin(login);
		if (result) {
			return ResponseEntity.ok("Login Success");
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	// http://localhost:9091/HomeApp/users/register
	@PostMapping(path = "register")
	public ResponseEntity<String> registerUser(@RequestBody Registration reg) {

		try {
			service.findRegistrationDetailsbyEmail(reg.getEmailId());
			return ResponseEntity.notFound().build();
		}
		catch(Exception e) {
			service.createRegistration(reg);
		}
		return null;
	}

	@GetMapping(path = "/")
	public List<Registration> getUserList() {

		return service.findAllRegistrations();
	}
	
	// http://localhost:9091/HomeApp/users/isFirstTimeUser/{emailId}
	@GetMapping(path= "isFirstTimeUser/{emailId}")
	public Registration getRegistrationDetails(@PathVariable("emailId") String email) {
		
		return service.findRegistrationDetailsbyEmail(email);
	}
	
	@PostMapping(path = "customerdetails/{emailId}")
	public Registration setCustomerDetails(@PathVariable("emailId") String email,@RequestBody Customer_Details cd) {
		
		Registration reg = service.findRegistrationDetailsbyEmail(email);
		reg.setCdetails(cd);
		return service.modifyRegistration(reg);
	}
	
	// http://localhost:9091/HomeApp/users/customerdetails/
	@GetMapping(path= "customerdetails/{emailId}")
	public Customer_Details getCustomerDetails(@PathVariable("emailId") String email) {
		
		try {
			Customer_Details cd = service.findCustomerDetailsbyEmail(email);
			return cd;
		}
		catch(Exception e) {
			return null; 
		}
	}
}
