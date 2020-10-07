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

	public static void send(String to, String sub, String msg) {
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
			message.setText(msg);
			// send message1
			Transport.send(message);
			System.out.println("message sent successfully");
		} catch (MessagingException e) {
			throw new RuntimeException(e);
		}

	}
	
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
	         messageBodyPart.setContent("<h3>Dear " + name + ",</h3> <br>" + "<p>Your Loan Application with <b> ID : " + applId
					+ "</b> has been sent for approval. Please check the attached Loan Application Form PDF ","text/html");

	         // Create a multipar message
	         Multipart multipart = new MimeMultipart();

	         // Set text message part
	         multipart.addBodyPart(messageBodyPart);

	         // Part two is attachment
	         messageBodyPart = new MimeBodyPart();
//	         String filename = "D:\\Project_Gladiator\\Registration Form\\"+applId+"_Reg.pdf";
	         String filename = "G:\\Angular\\load-pdf\\"+applId+"_Reg.pdf";
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

			message.setContent("<h3>Dear " + name + ",</h3> <br>" + "<p>Your Loan Application with <b> ID : " + applId
					+ "</b> for amount <b> &#x20b9; " + (int)loanamt + "</b> has been approved. "
					+ "Please Check Your Account for futher details", "text/html");


			// send message1
			Transport.send(message);
			System.out.println("message sent successfully");
		} catch (MessagingException e) {
			throw new RuntimeException(e);
		}

	}

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

			message.setContent("<h3>Dear " + name + ",</h3> <br>" + "<p>Your Loan Application with <b> ID : " + applId
					+ "</b> for amount <b> &#x20b9; " + (int)loanamt + " </b> has been rejected for the following reasons: <br>"
							+ "<b>"+remarks+"</b><br>"
					+ "Please Check Your Account for futher details", "text/html");

			// send message1
			Transport.send(message);
			System.out.println("message sent successfully");
		} catch (MessagingException e) {
			throw new RuntimeException(e);
		}

	}

}
