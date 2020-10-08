package com.lti.service;

import java.util.Properties;

import javax.activation.DataHandler;
import javax.activation.DataSource;
import javax.activation.FileDataSource;
import javax.mail.BodyPart;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Multipart;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;

public class MailService {

	// Registration Email
	public static void send(String to, String sub, String name) {
		// Get properties object
		Properties props = new Properties();
		props.put("mail.smtp.host", "smtp.gmail.com");
		props.put("mail.smtp.socketFactory.port", "465");
		props.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.port", "465");
		// get Session
		Session session = Session.getInstance(props, new javax.mail.Authenticator() {
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication("financingdreams2020@gmail.com", "ProjG@123");
			}
		});
		// compose message
		try {
			MimeMessage message = new MimeMessage(session);
			message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));
			message.setSubject(sub);

			// This mail has 2 part, the BODY and the embedded image
			MimeMultipart multipart = new MimeMultipart("related");

			// first part (the html)
			BodyPart messageBodyPart = new MimeBodyPart();
			String htmlText = "<h3>Dear " + name + ",</h3> <br>" + "<p>Welcome to Financing Dreams Home Loans."
					+ "Thank You For Registering with us." + "Please login to apply for your first Loan Today<br>"
					+ "Warm Regards,<br>" + "Financing Dreams Home Loans<br>"
					+ "<img src=\"cid:image\" width=\"120\" height=\"100\">";
			messageBodyPart.setContent(htmlText, "text/html");
			// add it
			multipart.addBodyPart(messageBodyPart);

			// second part (the image)
			messageBodyPart = new MimeBodyPart();
			DataSource fds = new FileDataSource("D:\\Project_Gladiator\\logo2.png");

			messageBodyPart.setDataHandler(new DataHandler(fds));
			messageBodyPart.setHeader("Content-ID", "<image>");

			// add image to the multipart
			multipart.addBodyPart(messageBodyPart);

			// put everything together
			message.setContent(multipart);
			// send message1
			Transport.send(message);
			System.out.println("message sent successfully");
		} catch (MessagingException e) {
			throw new RuntimeException(e);
		}

	}
	
	//OTP 
	public static void send(String to, String sub, String otp,String name) {
		// Get properties object
		Properties props = new Properties();
		props.put("mail.smtp.host", "smtp.gmail.com");
		props.put("mail.smtp.socketFactory.port", "465");
		props.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.port", "465");
		// get Session
		Session session = Session.getInstance(props, new javax.mail.Authenticator() {
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication("financingdreams2020@gmail.com", "ProjG@123");
			}
		});
		// compose message
		try {
			MimeMessage message = new MimeMessage(session);
			message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));
			message.setSubject(sub);

			// This mail has 2 part, the BODY and the embedded image
			MimeMultipart multipart = new MimeMultipart("related");

			// first part (the html)
			BodyPart messageBodyPart = new MimeBodyPart();
			String htmlText = "<h3>Dear " + name + ",</h3> <br>" + "<p>Your OTP for Password Reset is: <b>"+otp
					+"</b> <br><br>" + "Financing Dreams Home Loans<br>"
					+ "<img src=\"cid:image\" width=\"120\" height=\"100\">";
			messageBodyPart.setContent(htmlText, "text/html");
			// add it
			multipart.addBodyPart(messageBodyPart);

			// second part (the image)
			messageBodyPart = new MimeBodyPart();
			DataSource fds = new FileDataSource("D:\\Project_Gladiator\\logo2.png");

			messageBodyPart.setDataHandler(new DataHandler(fds));
			messageBodyPart.setHeader("Content-ID", "<image>");

			// add image to the multipart
			multipart.addBodyPart(messageBodyPart);

			// put everything together
			message.setContent(multipart);
			// send message1
			Transport.send(message);
			System.out.println("message sent successfully");
		} catch (MessagingException e) {
			throw new RuntimeException(e);
		}

	}

	// Application Form Send
	public static void send(String to, String sub, String name, int applId) {
		// Get properties object
		Properties props = new Properties();
		props.put("mail.smtp.host", "smtp.gmail.com");
		props.put("mail.smtp.socketFactory.port", "465");
		props.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.port", "465");
		// get Session
		Session session = Session.getInstance(props, new javax.mail.Authenticator() {
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication("financingdreams2020@gmail.com", "ProjG@123");
			}
		});
		// compose message
		try {
			MimeMessage message = new MimeMessage(session);
			message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));
			message.setSubject(sub);

			// Create the message part
			BodyPart messageBodyPart = new MimeBodyPart();

			// Now set the actual message
			messageBodyPart.setContent("<h3>Dear " + name + ",</h3> <br>" + "<p>Your Loan Application with <b> ID : "
					+ applId
					+ "</b> has been sent for approval. Please check the attached Loan Application Form PDF <br>"
					+ "Warm Regards,<br>" + "Financing Dreams Home Loans<br>"
					+ "<img src=\"cid:image\" width=\"120\" height=\"100\">", "text/html");

			// Create a multipar message
			Multipart multipart = new MimeMultipart();

			// Set text message part
			multipart.addBodyPart(messageBodyPart);

			// second part (the image)
			messageBodyPart = new MimeBodyPart();
			DataSource fds = new FileDataSource("D:\\Project_Gladiator\\logo2.png");

			messageBodyPart.setDataHandler(new DataHandler(fds));
			messageBodyPart.setHeader("Content-ID", "<image>");

			// add image to the multipart
			multipart.addBodyPart(messageBodyPart);

			// Part two is attachment
			messageBodyPart = new MimeBodyPart();
			String filename = "D:\\Project_Gladiator\\Registration Form\\" + applId + "_Reg.pdf";
			DataSource source = new FileDataSource(filename);
			messageBodyPart.setDataHandler(new DataHandler(source));
			messageBodyPart.setFileName(filename);
			multipart.addBodyPart(messageBodyPart);

			// Send the complete message parts
			message.setContent(multipart);

			// Send message
			Transport.send(message);

		} catch (MessagingException e) {
			throw new RuntimeException(e);
		}

	}

	// Approval
	public static void send(String to, String sub, String name, int applId, double loanamt) {
		// Get properties object
		Properties props = new Properties();
		props.put("mail.smtp.host", "smtp.gmail.com");
		props.put("mail.smtp.socketFactory.port", "465");
		props.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.port", "465");
		// get Session
		Session session = Session.getInstance(props, new javax.mail.Authenticator() {
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication("financingdreams2020@gmail.com", "ProjG@123");
			}
		});
		// compose message
		try {
			MimeMessage message = new MimeMessage(session);
			message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));
			message.setSubject(sub);

			// Create the message part
			BodyPart messageBodyPart = new MimeBodyPart();

			messageBodyPart.setContent("<h3>Dear " + name + ",</h3> <br>" + "<p>Your Loan Application with <b> ID : "
					+ applId + "</b> for amount <b> &#x20b9; " + (int) loanamt + "</b> has been approved. "
					+ "Please Check Your Account for futher details<br>" + "Warm Regards,<br>"
					+ "Financing Dreams Home Loans<br>" + "<img src=\"cid:image\" width=\"120\" height=\"100\">",
					"text/html");

			// Create a multipar message
			Multipart multipart = new MimeMultipart();

			// Set text message part
			multipart.addBodyPart(messageBodyPart);

			// second part (the image)
			messageBodyPart = new MimeBodyPart();
			DataSource fds = new FileDataSource("D:\\Project_Gladiator\\logo2.png");

			messageBodyPart.setDataHandler(new DataHandler(fds));
			messageBodyPart.setHeader("Content-ID", "<image>");

			// add image to the multipart
			multipart.addBodyPart(messageBodyPart);

			// Send the complete message parts
			message.setContent(multipart);

			// send message1
			Transport.send(message);
			System.out.println("message sent successfully");

		} catch (MessagingException e) {
			throw new RuntimeException(e);
		}

	}

	// Rejection
	public static void send(String to, String sub, String name, int applId, double loanamt, String remarks) {
		// Get properties object
		Properties props = new Properties();
		props.put("mail.smtp.host", "smtp.gmail.com");
		props.put("mail.smtp.socketFactory.port", "465");
		props.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.port", "465");
		// get Session
		Session session = Session.getInstance(props, new javax.mail.Authenticator() {
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication("financingdreams2020@gmail.com", "ProjG@123");
			}
		});
		// compose message
		try {
			MimeMessage message = new MimeMessage(session);
			message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));
			message.setSubject(sub);

			// Create the message part
			BodyPart messageBodyPart = new MimeBodyPart();

			messageBodyPart.setContent("<h3>Dear " + name + ",</h3> <br>" + "<p>Your Loan Application with <b> ID : "
					+ applId + "</b> for amount <b> &#x20b9; " + (int) loanamt
					+ " </b> has been rejected for the following reasons: <br>" + "<b>" + remarks + "</b><br>"
					+ "Please Check Your Account for futher details<br>"
					+ "Warm Regards,<br>"
					+ "Financing Dreams Home Loans<br>" + "<img src=\"cid:image\" width=\"120\" height=\"100\">", "text/html");

			// Create a multipar message
			Multipart multipart = new MimeMultipart();

			// Set text message part
			multipart.addBodyPart(messageBodyPart);

			// second part (the image)
			messageBodyPart = new MimeBodyPart();
			DataSource fds = new FileDataSource("D:\\Project_Gladiator\\logo2.png");

			messageBodyPart.setDataHandler(new DataHandler(fds));
			messageBodyPart.setHeader("Content-ID", "<image>");

			// add image to the multipart
			multipart.addBodyPart(messageBodyPart);

			// Send the complete message parts
			message.setContent(multipart);
			
			// send message1
			Transport.send(message);
			System.out.println("message sent successfully");
		} catch (MessagingException e) {
			throw new RuntimeException(e);
		}

	}

}
