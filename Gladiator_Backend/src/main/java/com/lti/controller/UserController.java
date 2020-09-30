package com.lti.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lti.model.Login;
import com.lti.service.CustomerService;

@RestController
@CrossOrigin
@RequestMapping(path = "users")
// http://localhost:9091/HomeApp/users
public class UserController {
	
	@Autowired
	private CustomerService service;
	
	// http://localhost:9091/HomeApp/users/login
	@PostMapping(path = "login")
	public ResponseEntity<String> loginadmin(@RequestBody Login login) {
		
		boolean result = service.verifyLogin(login);
		if (result) {
			return ResponseEntity.ok("Login Success");
		} else {
			return ResponseEntity.notFound().build();
		}
	}
}
