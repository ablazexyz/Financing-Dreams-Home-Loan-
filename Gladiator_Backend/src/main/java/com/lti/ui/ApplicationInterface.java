package com.lti.ui;

import java.util.HashSet;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import com.lti.model.Application;
import com.lti.model.Customer_Details;

public class ApplicationInterface {

	public static void main(String[] args) {

		EntityManagerFactory factory = Persistence.createEntityManagerFactory("JPA-PU");
		EntityManager entityManager = factory.createEntityManager();

		Customer_Details c1 = entityManager.find(Customer_Details.class, 1);
		Customer_Details c2 = entityManager.find(Customer_Details.class, 2);
		Customer_Details c3 = entityManager.find(Customer_Details.class, 3);

		
		Application appl = new Application("Jadavpur", 60000);
		appl.setCdetails2(c1);
		
		Application appl1 = new Application("Dum-Dum", 40000);
		appl1.setCdetails2(c1);
		
		Application appl2 = new Application("Howrah", 30000);
		appl2.setCdetails2(c2);
		
		Application appl3 = new Application("Delhi", 50000);
		appl3.setCdetails2(c3);
		
		Application appl4 = new Application("Mumbai", 70000);
		appl4.setCdetails2(c3);
		
		c1.setApplications(new HashSet<Application>());
		c1.addApplications(appl);
		c1.addApplications(appl1);
		
		c2.setApplications(new HashSet<Application>());
		c2.addApplications(appl2);
		
		c3.setApplications(new HashSet<Application>());
		c3.addApplications(appl3);
		c3.addApplications(appl4);
		
		
		entityManager.getTransaction().begin();
		entityManager.persist(appl1);
		entityManager.persist(appl2);
		entityManager.persist(appl3);
		entityManager.persist(appl4);
		entityManager.getTransaction().commit();


		
	}

}
