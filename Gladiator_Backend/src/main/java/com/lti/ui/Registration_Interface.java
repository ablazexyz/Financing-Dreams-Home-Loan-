package com.lti.ui;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import com.lti.model.Registration;

public class Registration_Interface {

	public static void main(String[] args) {
	
		EntityManagerFactory factory = Persistence.createEntityManagerFactory("JPA-PU");
		EntityManager entityManager = factory.createEntityManager();
		
		
		Registration reg = new Registration("aba@gmail.com","AB","abc123","9876");
		Registration reg2 = new Registration("abc@gmail.com","AC","abc123","4567");
		Registration reg3 = new Registration("xyz@gmail.com","XY","xyz123","1234");
		
		entityManager.getTransaction().begin();

		entityManager.persist(reg);
		entityManager.persist(reg2);
		entityManager.persist(reg3);
		
		entityManager.getTransaction().commit();
		
		
	}

}
