package com.lti.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import com.lti.model.Admin;
import com.lti.model.Application;
import com.lti.model.Customer_Details;
import com.lti.model.Registration;
import com.lti.utility.JpaUtility;

public class CustomerDaoImpl {

	private EntityManager entityManager;

	public CustomerDaoImpl() {
		entityManager = JpaUtility.getEntityManager();
	}

	public void addRegistration(Registration reg) {

		entityManager.persist(reg);
	}

	public Registration getRegistrationDetailsbyEmail(String email) {

		Query query = entityManager.createQuery("Select r From Registration r Where emailId = :email");
		query.setParameter("email", email);
		Registration reg = (Registration) query.getSingleResult();
		return reg;

	}

	public Admin getAdminDetails(String email) {

		Query query = entityManager.createQuery("Select a From Admin a Where ademail = :email");
		query.setParameter("email", email);
		Admin adm = (Admin) query.getSingleResult();
		return adm;
	}

	public Customer_Details getCustomerDetailsbyEmail(String email) {

		Query query = entityManager
				.createQuery("Select c From Customer_Details c Where c.registration.emailId = :email");
		query.setParameter("email", email);
		Customer_Details cd = (Customer_Details) query.getSingleResult();
		return cd;
	}

	public List<Application> getAllApplicationsbyEmail(String email) {

		Query query = entityManager
				.createQuery("Select a From Application a where a.cdetails2.registration.emailId = :email");
		query.setParameter("email", email);
		return query.getResultList();

	}

	public List<Customer_Details> getAllCustomerDetails() {

		Query query = entityManager.createQuery("Select c From Customer_Details c");
		return query.getResultList();

	}

	public List<Application> getAllApplications() {

		Query query = entityManager.createQuery("Select a From Application a ");
		return query.getResultList();

	}
	

	public void beginTransaction() {
		entityManager.getTransaction().begin();
	}

	public void commitTransaction() {
		entityManager.getTransaction().commit();
	}

	public void rollbackTransaction() {
		entityManager.getTransaction().rollback();
	}
}
