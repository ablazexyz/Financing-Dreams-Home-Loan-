package com.lti.customExceptions;

public class FileTypeException extends Exception {
	@Override
	public String getMessage() {
		return "Only pdf files allowed";
	}
}
