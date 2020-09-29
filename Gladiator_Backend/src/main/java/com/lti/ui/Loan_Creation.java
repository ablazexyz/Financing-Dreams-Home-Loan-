package com.lti.ui;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import com.lti.model.Application;
import com.lti.model.Loan;

public class Loan_Creation {

	public static void main(String[] args) {
		
		EntityManagerFactory factory = Persistence.createEntityManagerFactory("JPA-PU");
		EntityManager entityManager = factory.createEntityManager();
		

		Application application1 = entityManager.find(Application.class, 4);
		Application application2 = entityManager.find(Application.class, 5);
		Application application3 = entityManager.find(Application.class, 6);
		Application application4 = entityManager.find(Application.class, 7);
		Application application5 = entityManager.find(Application.class, 8);
		
		Loan l1 = new Loan();
		Loan l2 = new Loan();
		Loan l3 = new Loan();
		Loan l4 = new Loan();
		Loan l5 = new Loan();

		
		l1.setApplication(application1);
		l2.setApplication(application2);
		l3.setApplication(application3);
		l4.setApplication(application4);
		l5.setApplication(application5);

		
		entityManager.getTransaction().begin();
		entityManager.persist(l1);
		entityManager.persist(l2);
		entityManager.persist(l3);
		entityManager.persist(l4);
		entityManager.persist(l5);
		entityManager.getTransaction().commit();
		
	}

}
