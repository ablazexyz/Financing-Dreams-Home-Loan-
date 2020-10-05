package com.lti.dao;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.lti.dto.LoanDto;
import com.lti.model.Account;
import com.lti.model.Application;
import com.lti.model.Loan;

@Repository("admindao")
@Scope(scopeName = "singleton")
public class AdminDaoImpl implements AdminDao{

	
	@PersistenceContext
	private EntityManager entityManager;

	
	
	@Override
	public List<Application> getAllApplications() {

		Query query = entityManager.createQuery("Select a From Application a Where a.loanStatus = :status ");
		query.setParameter("status", "Pending");
		return query.getResultList();
	}
	
	

	@Override
	public List<Application> getApprovedLoans() {
		
		Query query = entityManager.createQuery("Select a From Application a JOIN a.loan l Where l IS NOT NULL");
		
		List<Application> approved = query.getResultList();
		
		
		return approved;
	}


	@Override
	@Transactional(propagation = Propagation.MANDATORY)
	public void approveAppl(int applId, String loanRemarks) {
		
		Query query = entityManager.createQuery("Select a From Application a Where a.applicationId = :id");
		query.setParameter("id", applId);
		
		Application appl = (Application) query.getSingleResult();
		appl.setLoanStatus("Approved");
		appl.setLoanRemarks(loanRemarks);
		appl.setApprDate(LocalDate.now());
		
		Loan loan = new Loan();
		loan.setApplication(appl);

		List<Integer> cid_list = entityManager.createQuery("SELECT c.cust_id FROM Account c").getResultList();
		System.out.println("Cust ID List");
		
		for (int c:cid_list) {
			System.out.println("CID: "+c);
		}
		
		Account ac1 ;
		int cid = appl.getCdetails2().getCustomer_id();
		System.out.println("Cust ID: "+cid);
		
		if (cid_list.contains(cid)) {

			Query query1 = entityManager.createQuery("SELECT c FROM Account c Where c.cust_id = :cid");
			query1.setParameter("cid", cid);

			ac1 = (Account) query1.getSingleResult(); 

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
		
		entityManager.persist(loan);
		
	}



	@Override
	public Application rejectAppl(int applId, String loanRemarks) {
		
		Query query = entityManager.createQuery("Select a From Application a Where a.applicationId = :id");
		query.setParameter("id", applId);
		
		Application appl = (Application) query.getSingleResult();
		appl.setLoanStatus("Rejected");
		appl.setLoanRemarks(loanRemarks);
		appl.setApprDate(LocalDate.now());
		
		appl = entityManager.merge(appl);
		
		return appl;
		
	}



	@Override
	public Account getAccountByCustId(int cid) {
		
		Query query = entityManager.createQuery("Select a From Account a Where a.cust_id = :cid");
		query.setParameter("cid", cid);
		return (Account) query.getSingleResult();
	}



}
