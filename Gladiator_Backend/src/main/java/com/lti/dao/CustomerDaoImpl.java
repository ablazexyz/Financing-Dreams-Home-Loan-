package com.lti.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.lti.model.Admin;
import com.lti.model.Application;
import com.lti.model.Customer_Details;
import com.lti.model.Registration;

@Repository("dao")
@Scope(scopeName = "singleton")
public class CustomerDaoImpl implements CustomerDao{

	@PersistenceContext
	private EntityManager entityManager;

	@Transactional(propagation = Propagation.MANDATORY)
	public void addRegistration(Registration reg) {

		entityManager.persist(reg);
	}
	
	@Transactional(propagation = Propagation.MANDATORY)
	public Registration updateRegistration(Registration reg) {
		
		return entityManager.merge(reg);
	}
	
	
	@Transactional(propagation = Propagation.MANDATORY)
	public void addApplication(Application appl) {
		
		entityManager.persist(appl);
		
	}

	public Registration getRegistrationDetailsbyEmail(String email) {

		Query query = entityManager.createQuery("Select r From Registration r Where emailId = :email");
		query.setParameter("email", email);
		Registration reg = (Registration) query.getSingleResult();
		return reg;

	}
	
	public Admin getAdminDetailsbyEmail(String email) {

		Query query = entityManager.createQuery("Select a From Admin a Where ademail = :email");
		query.setParameter("email", email);
		Admin adm = (Admin)query.getSingleResult();
		return adm;

	}
	
	public List<Registration> getAllRegistrations() {

		Query query = entityManager.createQuery("Select r From Registration r");
		List<Registration> reg = query.getResultList();
		return reg;

	}

	public List<Admin> getAllAdmins() {

		Query query = entityManager.createQuery("Select a From Admin a");
		List<Admin> admlist = query.getResultList();
		return admlist;
	}

	public Customer_Details getCustomerDetailsbyEmail(String email) {

		Query query = entityManager.createQuery("Select c From Customer_Details c Where c.registration.emailId = :email");
		query.setParameter("email", email);
		Customer_Details cd = (Customer_Details) query.getSingleResult();
		return cd;
	}


	public List<Application> getAllApplicationsbyEmail(String email) {

		Query query = entityManager.createQuery("Select a From Application a where a.cdetails2.registration.emailId = :email");
		query.setParameter("email", email);
		return query.getResultList();

	}


	public List<Customer_Details> getAllCustomerDetails() {

		Query query = entityManager.createQuery("Select c From Customer_Details c");
		return query.getResultList();

	}

	@Override
	public boolean isFirstTimeUser(String emailId) {
		Registration registeredUser = entityManager.find(Registration.class, emailId);
		try {
			int customerId = registeredUser.getCdetails().getCustomer_id();
			return false;
		} catch (NullPointerException e) {
			return true;
		}
	}

	@Override
	public Application getApplicationById(int applId) {
		
		Query query = entityManager.createQuery("Select a From Application a where a.applicationId = :id");
		query.setParameter("id", applId);
		return (Application) query.getSingleResult();
	}

	
}
