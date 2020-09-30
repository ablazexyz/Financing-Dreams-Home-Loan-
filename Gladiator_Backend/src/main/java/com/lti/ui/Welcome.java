package com.lti.ui;

import java.util.HashSet;
import java.util.List;
import java.util.Scanner;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.Query;

import com.lti.model.Account;
import com.lti.model.Admin;
import com.lti.model.Application;
import com.lti.model.Customer_Details;
import com.lti.model.Loan;
import com.lti.model.Registration;
import com.lti.service.CustomerServiceImpl;

public class Welcome {

	public static void main(String[] args) {

		EntityManagerFactory factory = Persistence.createEntityManagerFactory("JPA-PU");
		EntityManager entityManager = factory.createEntityManager();

		System.out.println("Welcome to Financing Dreams Home Loans");
		System.out.println("Please select option:");
		System.out.println("1. Register New User");
		System.out.println("2. User Login");
		System.out.println("3. Admin Login");

		System.out.println("Option : ");
		Scanner sc = new Scanner(System.in);
		int op = sc.nextInt();
		int se = 0;
		int sa = 0;

		CustomerServiceImpl service = new CustomerServiceImpl();
		boolean login = false;
		boolean adlogin = false;
		String email = null;

		if (op == 1) {

			System.out.println("Enter Customer Email: ");
			email = sc.next();

			System.out.println("Enter Customer Name: ");
			String name = sc.next();

			System.out.println("Enter Password: ");
			String pass = sc.next();

			System.out.println("Enter Customer Gender: ");
			String gender = sc.next();

			System.out.println("Enter Customer Mobile Number: ");
			String number = sc.next();

			Registration reg = new Registration();

			reg.setEmailId(email);
			reg.setName(name);
			reg.setGender(gender);
			reg.setPassword(pass);
			reg.setMnumber(number);

			service.createRegistration(reg);
		}

		else if (op == 2) {

			System.out.println("Enter Email: ");
			email = sc.next();

			System.out.println("Enter Password: ");
			String pass = sc.next();

			Registration reg = service.findRegistrationDetailsbyEmail(email);

			if (reg.getPassword().equals(pass) && reg.getEmailId().equals(email)) {
				System.out.println("Login Successful");
				login = true;
			} else {
				System.out.println("Incorrect Credentials");
			}

		}

		else if (op == 3) {

			System.out.println("Enter Email: ");
			String ademail = sc.next();

			System.out.println("Enter Password: ");
			String pass = sc.next();

			List<Admin> admins = service.findAllAdmins();
			
			for(Admin adm: admins) {
				
				if (adm.getAdemail().equals(ademail) && adm.getAdpassword().equals(pass)) {
					
						System.out.println("Admin Login Successful");
						adlogin = true;
				}
				else {
						System.out.println("Incorrect Credentials");
					 }
			}
			
		}

		if (login) {

			System.out.println("Please Select Option: ");
			System.out.println("1. Apply For New Loan");
			System.out.println("2. View all Current Applications");
			se = sc.nextInt();

		}

		if (se == 1) {

			Registration reg = service.findRegistrationDetailsbyEmail(email);
			Customer_Details cd = reg.getCdetails();

			if (cd == null) {
				System.out.println("Please Enter Customer Details");

				cd = new Customer_Details();

				System.out.println("Enter AADHAR NO: ");
				String aadhar = sc.next();

				System.out.println("Enter Salary: ");
				double salary = sc.nextDouble();

				/*
				System.out.println("Enter PAN NO: ");
				String pan = sc.next();

				System.out.println("Enter Employer Name: ");
				String empname = sc.next();

				System.out.println("Enter Employment Organization Type: ");
				String org = sc.next();

				System.out.println("Enter Retirement Age: ");
				int ret = sc.nextInt();

				 
				
				cd.setPan(pan);
				cd.setEmpname(empname);
				cd.setOrgtype(org);
				cd.setRetireage(ret);
				*/
				
				cd.setAadhar(aadhar);
				cd.setSalary(salary);

				reg.setCdetails(cd);

				entityManager.getTransaction().begin();

				reg = entityManager.merge(reg);
				entityManager.getTransaction().commit();

				System.out.println("Please Enter Loan Application Details");

				Application appl = new Application();
				appl.setLoanStatus("pending");

				/*
				System.out.println("Enter Property Location: ");
				appl.setPropertyLocation(sc.next());

				System.out.println("Enter Property Estimated Amount: ");
				appl.setPropertyAmt(sc.nextDouble());
				*/
				
				System.out.println("Enter Loan Amount : ");
				appl.setLoanAmt(sc.nextDouble());

				/*
				System.out.println("Enter Property Location: ");
				appl.setPropertyLocation(sc.next());

				System.out.println("Enter Property Estimated Amount: ");
				appl.setPropertyAmt(sc.nextDouble());
				*/
				
				cd = service.findCustomerDetailsbyEmail(email);
				System.out.println("1. ");
				System.out.println(cd);

				appl.setCdetails2(cd);
				System.out.println("2. ");
				System.out.println(cd);

				if (cd.getApplications().isEmpty()) {

					System.out.println("3. ");
					System.out.println(cd);

					cd.setApplications(new HashSet<Application>());
					System.out.println("4. ");
					System.out.println(cd);
				}
				cd.addApplications(appl);
				System.out.println("5. ");
				System.out.println(cd);

				entityManager.getTransaction().begin();
				entityManager.persist(appl);

				System.out.println("6. ");
				System.out.println(cd);

				entityManager.getTransaction().commit();

			}

			else {

				System.out.println("Please Enter Loan Application Details");

				Application appl = new Application();

				/*
				System.out.println("Enter Property Location: ");
				appl.setPropertyLocation(sc.next());

				System.out.println("Enter Property Estimated Amount: ");
				appl.setPropertyAmt(sc.nextDouble());
				*/
				
				System.out.println("Enter Loan Amount : ");
				appl.setLoanAmt(sc.nextDouble());

				/*
				System.out.println("Enter ROI : ");
				appl.setRoi(sc.nextDouble());

				System.out.println("Enter Tenure: ");
				appl.setTenure(sc.nextInt());
				*/
				
				cd = reg.getCdetails();

				appl.setCdetails2(cd);

				if (cd.getApplications().isEmpty()) {

					cd.setApplications(new HashSet<Application>());
				}
				cd.addApplications(appl);

				entityManager.getTransaction().begin();
				entityManager.persist(appl);
				entityManager.getTransaction().commit();

			}

		}

		else if (se == 2) {

			List<Application> applist = service.findAllApplicationsbyEmail(email);
			for (Application a : applist) {

				System.out.println("Application Details: ");
				System.out.println(a);

				System.out.println("Customer Details");
				System.out.println(a.getCdetails2());
				System.out.println(a.getCdetails2().getRegistration());
			}

		}

		if (adlogin) {

			System.out.println("Welcome Admin ");
			System.out.println("Please Select Option");
			System.out.println("1. View All Applications");
			System.out.println("2. Show All Registered Customer Details");
			sa = sc.nextInt();
		}

		if (sa == 2) {

			List<Customer_Details> cdlist = service.findAllCustomerDetails();
			for (Customer_Details cd : cdlist) {

				System.out.println(cd);
			}
		}

		else if (sa == 1) {

			List<Application> applist = service.findAllApplications();
			for (Application a : applist) {

				System.out.println(a);
			}

			System.out.println("Enter Application ID :");
			int appId = sc.nextInt();

			Application appl = entityManager.find(Application.class, appId);

			System.out.println("Application Details");
			System.out.println(appl.showApplication());

			System.out.println("Enter 1 to Approve , Enter 2 to Reject");

			int stat = sc.nextInt();

			if (stat == 2) {

				appl.setLoanStatus("Rejected");
				System.out.println("Please Enter Remarks: ");
				String remarks = sc.next();
				appl.setLoanRemarks(remarks);

				entityManager.getTransaction().begin();
				entityManager.merge(appl);
				entityManager.getTransaction().commit();
			}

			else if (stat == 1) {

				appl.setLoanStatus("Approved");

				Loan loan = new Loan();
				loan.setApplication(appl);

				entityManager.getTransaction().begin();
				entityManager.persist(loan);
				entityManager.getTransaction().commit();

				List<Integer> cid_list = entityManager.createQuery("SELECT a.cust_id FROM Account a").getResultList();

				Account ac1;
				int cid = appl.getCdetails2().getCustomer_id();

				if (cid_list.contains(cid)) {

					Query query = entityManager.createQuery("SELECT a FROM Account a WHERE a.cust_id = :cid",
							Account.class);
					query.setParameter("cid", cid);

					ac1 = (Account) query.getSingleResult();

					double balance = ac1.getBalance();
					balance += (loan.getApplication().getLoanAmt());
					ac1.setBalance(balance);
					loan.setAccount(ac1);

				} else {

					ac1 = new Account();

					ac1.setBalance(loan.getApplication().getLoanAmt());
					ac1.setCust_id(loan.getApplication().getCdetails2().getCustomer_id());
					ac1.setLoans(new HashSet<Loan>());
					ac1.addLoan(loan);
					loan.setAccount(ac1);

				}

				entityManager.getTransaction().begin();
				entityManager.persist(ac1);
				entityManager.getTransaction().commit();
			}
		}

	}

}
