package com.lti.controller;

import java.io.File;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MaxUploadSizeExceededException;
import org.springframework.web.multipart.MultipartFile;

import com.lti.customExceptions.FileTypeException;
import com.lti.dto.EmiDto;
import com.lti.model.Account;
import com.lti.model.Application;
import com.lti.model.Customer_Details;
import com.lti.model.Login;
import com.lti.model.Registration;
import com.lti.service.CustomerService;
import com.lti.service.MailService;
import com.lti.service.PDFService;

@RestController
@CrossOrigin
@RequestMapping(path = "users")
// http://localhost:9091/HomeApp/users
public class UserController {

	@Autowired
	private CustomerService service;
//	private final String tanuj_path = "D:\\LTI_TRAINING\\gladiator\\MyBackendExperiments\\Fileupload-Example\\storedFiles";
	private final Path rootLocation = Paths.get("D:\\Project_Gladiator\\Files Upload");

	// private final Path rootLocation = Paths.get("G:/Angular/Document Uploads");
//	 private final Path rootLocation = Paths.get(tanuj_path);

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
		} catch (Exception e) {
			service.createRegistration(reg);

			String msg = "";
			msg += ("Welcome to Financing Dreams Home Loans, " + ".Thank You For Registering with us. "
					+ "Please login to apply for your first Loan Today");

			String name = reg.getFirstName() + " " + reg.getLastName();

			MailService.send(reg.getEmailId(), "Registration Successful", name);
		}
		return null;
	}

	// http://localhost:9091/HomeApp/users/forgot/{emailId}
	@GetMapping(path = "forgot/{emailId}")
	public String forgotPassword(@PathVariable("emailId") String email) {

		String numbers = "123456789";

		Random rndm_method = new Random();

		char[] otp = new char[4];

		for (int i = 0; i < 4; i++) {

			otp[i] = numbers.charAt(rndm_method.nextInt(numbers.length()));
		}

		String pass = String.valueOf(otp);

		Registration reg = service.findRegistrationDetailsbyEmail(email);
		
		String name = reg.getFirstName()+" "+reg.getLastName();

		MailService.send(email, "OTP For Password Reset", pass,name);
		return pass;
	}

	@PostMapping(path = "updatePass")
	public void updatePassword(@RequestBody Login login) {

		List<Application> applst = service.findAllApplicationsbyEmail(login.getAdemail());

		if (applst.isEmpty()) {

			try {
				Customer_Details cd = service.findCustomerDetailsbyEmail(login.getAdemail());
				cd.getRegistration().setPassword(login.getAdpass());
				System.out.println(service.modifyCustomerDetails(cd));
			} catch (Exception e) {
				Registration reg = service.findRegistrationDetailsbyEmail(login.getAdemail());
				reg.setPassword(login.getAdpass());
				service.modifyRegistration(reg);
			}

		} else {
			for (Application appl : applst) {
				appl.getCdetails2().getRegistration().setPassword(login.getAdpass());
				service.modifyApplication(appl);
			}

		}

	}

	@GetMapping(path = "/")
	public List<Registration> getUserList() {

		return service.findAllRegistrations();
	}

	// http://localhost:9091/HomeApp/users/isFirstTimeUser/{emailId}
	@GetMapping(path = "isFirstTimeUser/{emailId}")
	public Registration getRegistrationDetails(@PathVariable("emailId") String email) {

		try {
			return service.findRegistrationDetailsbyEmail(email);
		} catch (Exception e) {

			return null;
		}

	}

	@PostMapping(path = "customerdetails/{emailId}")
	public Registration setCustomerDetails(@PathVariable("emailId") String email, @RequestBody Customer_Details cd) {

		Registration reg = service.findRegistrationDetailsbyEmail(email);
		reg.setCdetails(cd);
		return service.modifyRegistration(reg);
	}

	// http://localhost:9091/HomeApp/users/customerdetails/{emailId}
	@GetMapping(path = "customerdetails/{emailId}")
	public Customer_Details getCustomerDetails(@PathVariable("emailId") String email) {

		try {
			Customer_Details cd = service.findCustomerDetailsbyEmail(email);
			return cd;
		} catch (Exception e) {
			return null;
		}
	}

	// http://localhost:9091/HomeApp/users/applicationdetails/{emailId}
	@PostMapping(path = "applicationdetails/{emailId}")
	public Application addApplication(@PathVariable("emailId") String email, @RequestBody Application appl) {

		Customer_Details cd = service.findCustomerDetailsbyEmail(email);

		appl.setCdetails2(cd);
		appl.setLoanStatus("Pending");
		appl.setApplDate(LocalDate.now());

		if (cd.getApplications().isEmpty()) {
			cd.setApplications(new HashSet<Application>());
		}

		cd.addApplications(appl);

		service.createApplication(appl);

		return appl;
	}

	// http://localhost:9091/HomeApp/users/sendapplication/{id}
	@GetMapping(path = "sendapplication/{id}")
	public void sendApplicationEmail(@PathVariable("id") int applId) {

		Application appl = service.findApplicationById(applId);
		PDFService.create(appl);

		String name = appl.getCdetails2().getRegistration().getFirstName() + " "
				+ appl.getCdetails2().getRegistration().getLastName();
		MailService.send(appl.getCdetails2().getRegistration().getEmailId(), "Loan Application Submitted", name,
				appl.getApplicationId());

	}

	// http://localhost:9091/HomeApp/users/applicationdetails/{emailId}
	@GetMapping(path = "applicationdetails/{emailId}")
	public List<Application> getAllApplicationsbyEmail(@PathVariable("emailId") String email) {

		return service.findAllApplicationsbyEmail(email);

	}

	// http://localhost:9091/HomeApp/users/application/{id}
	@GetMapping(path = "application/{id}")
	public Application getApplicationById(@PathVariable("id") int applId) {

		return service.findApplicationById(applId);
	}

	// http://localhost:9091/HomeApp/users/account/{emailid}
	@GetMapping(path = "account/{email}")
	public Account getAccountByEmail(@PathVariable("email") String email) {

		try {
			return service.findAccountByEmail(email);
		} catch (Exception e) {
			return null;
		}

	}

	// http://localhost:9091/HomeApp/users/application/EMIList/{applId}
	@GetMapping("application/EMIList/{applId}")
	public List<EmiDto> getEMIList(@PathVariable int applId) {
		Application appl = service.findApplicationById(applId);
		return service.calculateEmi(appl.getLoanAmt(), appl.getTenure(), appl.getRoi(), appl.getApplDate());
	}

	// http://localhost:9091/HomeApp/users/home/{amt}/{roi}/{ten}
	@GetMapping("home/{amt}/{roi}/{ten}")
	public List<EmiDto> getEMIListHome(@PathVariable int amt,@PathVariable double roi,@PathVariable int ten) {
		
		return service.calculateEmi(amt, ten, roi, LocalDate.now());
	}

	@PostMapping("/fileUpload/{id}/{documentType}")
	public ResponseEntity<String> handleFileUpload(@RequestParam("file") MultipartFile file,
			@PathVariable(name = "id") String id, @PathVariable(name = "documentType") String documentType) {

		// Path where the file will be stored(will create a directory named with
		// whatever is passed to 'id')
		// Path uploadPath = Path.of(rootLocation.toString(), id);
		Path uploadPath = Paths.get(rootLocation.toString(), id);

		// Checking if the folder where to upload exists or not
		File userDocumentsFolder = new File(uploadPath.toString());

		// allow only pdf uploads
		String fileContentType = file.getContentType();
		try {
			if (!fileContentType.equals("application/pdf")) {
				throw new FileTypeException();
			}
		} catch (FileTypeException e) {
			return ResponseEntity.status(HttpStatus.UNSUPPORTED_MEDIA_TYPE).body(e.getMessage());
		}
		boolean folderCreated = false;
		// if it doesn't exist , create that folder

		if (!userDocumentsFolder.exists()) {
			if (userDocumentsFolder.mkdir()) {
				System.out.println("created directory");
				folderCreated = true;
			} else {
				System.out.println("Failed to create directory");
			}
		}

		String message;
		try {
			try {
				// Files.copy(file.getInputStream(),
				// uploadPath.resolve(file.getOriginalFilename()),StandardCopyOption.REPLACE_EXISTING);
				// Files.copy(file.getInputStream(),
				// uploadPath.resolve("resume.pdf"),StandardCopyOption.REPLACE_EXISTING);
				Files.copy(file.getInputStream(), uploadPath.resolve(documentType + ".pdf"),
						StandardCopyOption.REPLACE_EXISTING);
			} catch (Exception e) {
				throw new RuntimeException("FAIL!");
			}
			// files.add(file.getOriginalFilename());

			message = "Successfully uploaded!";
			return ResponseEntity.status(HttpStatus.OK).body(message);
		} catch (Exception e) {
			message = "Failed to upload!";
			return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(message);
		}
	}

	@PostMapping("/fileUpload/{username}/{applicationId}/{documentType}")
	public ResponseEntity<String> uploadApplicationDocuments(@RequestParam("file") MultipartFile file,
			@PathVariable(name = "username") String username,
			@PathVariable(name = "applicationId") String applicationId,
			@PathVariable(name = "documentType") String documentType) {

		// Path where the file will be stored(will create a directory named with
		// whatever is passed to 'id')
//		Path uploadPath = Path.of(rootLocation.toString(), id);
		Path uploadPath = Paths.get(rootLocation.toString(), username, applicationId);

		// Checking if the folder where to upload exists or not
		File applicationDocumentsFolder = new File(uploadPath.toString());

		// System.out.println(userDocumentsFolder.getParentFile());

		// allow only pdf uploads
		String fileContentType = file.getContentType();
		try {
			if (!fileContentType.equals("application/pdf")) {
				throw new FileTypeException();
			}
		} catch (FileTypeException e) {
			return ResponseEntity.status(HttpStatus.UNSUPPORTED_MEDIA_TYPE).body(e.getMessage());
		}
		boolean folderCreated = false;
		// if it doesn't exist , create that folder

		if (!applicationDocumentsFolder.exists()) {
			if (applicationDocumentsFolder.mkdir()) {
				System.out.println("created directory for storing application documents");
				folderCreated = true;
			} else {
				System.out.println("Failed to create directory for application documents");
			}
		}

		String message;
		try {
			try {
				// Files.copy(file.getInputStream(),
				// uploadPath.resolve(file.getOriginalFilename()),StandardCopyOption.REPLACE_EXISTING);
				// Files.copy(file.getInputStream(),
				// uploadPath.resolve("resume.pdf"),StandardCopyOption.REPLACE_EXISTING);
				Files.copy(file.getInputStream(), uploadPath.resolve(documentType + ".pdf"),
						StandardCopyOption.REPLACE_EXISTING);
			} catch (Exception e) {
				throw new RuntimeException("FAIL!");
			}
			// files.add(file.getOriginalFilename());

			message = "Successfully uploaded!";
			return ResponseEntity.status(HttpStatus.OK).body(message);
		} catch (Exception e) {
			message = "Failed to upload!";
			return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(message);
		}
	}

	@GetMapping(path = "/fileDownload/{userFolderName}/{documentType}")
	public ResponseEntity<Resource> downloadFile(@PathVariable(name = "userFolderName") String userFolderName,
			@PathVariable(name = "documentType") String documentType) {
		// Path downloadPath = Path.of(rootLocation.toString(), userFolderName,
		// documentType + ".pdf");
		Path downloadPath = Paths.get(rootLocation.toString(), userFolderName, documentType + ".pdf");
		Resource resource = null;
		try {
			resource = new UrlResource(downloadPath.toUri());
		} catch (MalformedURLException e) {
			e.printStackTrace();
		}

		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_PDF);

		// to open the document in a new tab instead of downloading it
		headers.add("content-disposition", "inline; filename=" + resource.getFilename());

		return ResponseEntity.ok().headers(headers).body(resource);
	}

	@GetMapping(path = "/fileDownload/{userFolderName}/{applicationId}/{documentType}")
	public ResponseEntity<Resource> downloadApplicationFiles(
			@PathVariable(name = "userFolderName") String userFolderName,
			@PathVariable(name = "applicationId") String applicationId,
			@PathVariable(name = "documentType") String documentType) {
		// Path downloadPath = Path.of(rootLocation.toString(), userFolderName,
		// documentType + ".pdf");
		Path downloadPath = Paths.get(rootLocation.toString(), userFolderName, applicationId, documentType + ".pdf");
		Resource resource = null;
		try {
			resource = new UrlResource(downloadPath.toUri());
		} catch (MalformedURLException e) {
			e.printStackTrace();
		}

		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_PDF);

		// to open the document in a new tab instead of downloading it
		headers.add("content-disposition", "inline; filename=" + resource.getFilename());

		return ResponseEntity.ok().headers(headers).body(resource);
	}

	// Function to handle large file upload requests
	@ExceptionHandler(MaxUploadSizeExceededException.class)
	public ResponseEntity<String> handleFileSizeException() {
		String message = "File size too large!";
		return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(message);
	}

}
